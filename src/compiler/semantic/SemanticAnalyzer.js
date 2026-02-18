import ZScriptVisitor from "../ZScriptVisitor.js";
import ZScriptParser from "../ZScriptParser.js";
import path from "node:path";
import { Scope } from "./Scope.js";
import {
  Primitives,
  assertAssignable,
  Type,
  AnyType,
  VoidType,
  PrimitiveType,
  ArrayType,
  FunctionType,
  StructType,
  ClassType,
  EnumType,
  UnionType,
  InterfaceType,
  GenericParameterType,
  PromiseType,
  NominalType,
  LiteralType
} from "./TypeSystem.js";

export class SemanticAnalyzer extends ZScriptVisitor {
  constructor(modules, entryFile, analyzers = null) {
    super();
    this.modules = modules;
    this.entryFile = entryFile; // absolute path
    this.analyzers = analyzers; // Map<path, {analyzer, tree}>
    this.currentScope = null;
    this.currentFunctionReturnType = null;
    this.currentClass = null; // ClassType
    this.inAsync = false;
  }

  error(ctx, message) {
    const token = ctx?.start || ctx?.symbol;
    const line = token?.line ?? "?";
    const col = token?.column ?? "?";
    const contextText = ctx?.getText ? ` at '${ctx.getText()}'` : "";
    return new Error(`${this.entryFile}:${line}:${col}\nerror: ${message}${contextText}`);
  }

  resolveType(ctx) {
    if (!ctx) return Primitives.Any;
    if (ctx.getChildCount() === 3 && (ctx.getChild(1).getText() === "|" || ctx.getChild(1).getText() === "||")) {
      return new UnionType([this.resolveType(ctx.getChild(0)), this.resolveType(ctx.getChild(2))]);
    }
    
    // Check for literals
    if (ctx.literal && ctx.literal()) {
        const lit = ctx.literal();
        if (lit.StringLiteral && lit.StringLiteral()) return new LiteralType(lit.StringLiteral().getText().slice(1, -1));
        if (lit.DecimalLiteral && lit.DecimalLiteral()) return new LiteralType(Number(lit.DecimalLiteral().getText()));
        if (lit.BooleanLiteral && lit.BooleanLiteral()) return new LiteralType(lit.BooleanLiteral().getText() === "true");
    }

    const rawText = ctx.getText();
    if (!rawText || rawText.trim() === "") return Primitives.Any;
    const name = rawText.split('<')[0].split('[')[0].trim();
    if (!name) return Primitives.Any;

    let type = this.currentScope.resolveType(name);
    if (!type) {
      if (name === "Number" || name === "number") type = Primitives.Number;
      else if (name === "String" || name === "string") type = Primitives.String;
      else if (name === "Boolean" || name === "boolean") type = Primitives.Boolean;
      else if (name === "any") type = Primitives.Any;
      else if (name === "void") type = Primitives.Void;
      else if (name === "null") type = Primitives.Null;
      else if (name === "unknown") type = Primitives.Unknown;
      else if (name === "Promise") type = new PromiseType(Primitives.Any);
      else if (ctx.UNKNOWN && ctx.UNKNOWN()) type = Primitives.Unknown;
      else {
          // Check if it's a keyword literal from grammar tokens
          if (name === "true") return new LiteralType(true);
          if (name === "false") return new LiteralType(false);
          throw this.error(ctx, `Unknown type '${name}'`);
      }
    }
    if (ctx.typeArguments && typeof ctx.typeArguments === 'function' && ctx.typeArguments()) {
        const args = ctx.typeArguments().type().map(t => this.resolveType(t));
        if (type instanceof NominalType) {
            const applied = Object.assign(Object.create(Object.getPrototypeOf(type)), type);
            applied.typeArgs = args;
            type = applied;
        } else if (name === "Promise") {
            type = new PromiseType(args[0]);
        }
    }
    if (ctx.typeSuffix && typeof ctx.typeSuffix === 'function' && ctx.typeSuffix()) {
      return new ArrayType(type);
    }
    return type;
  }

  visitProgram(ctx) {
    for (const stmt of ctx.statement()) this.visit(stmt);
  }

  isExported(ctx) {
    if (ctx.EXPORT && ctx.EXPORT()) return true;
    if (ctx.parentCtx && ctx.parentCtx.constructor.name === "ExportStmtContext") return true;
    return false;
  }

  getDeclFromStmt(stmt) {
      if (!stmt) return null;
      for (let i = 0; i < stmt.getChildCount(); i++) {
          const child = stmt.getChild(i);
          const name = child.constructor.name;
          if (name === "ExportStmtContext") return child.getChild(1);
          if (name.endsWith("Context") && name !== "VisibilityContext" && name !== "TerminalNodeImpl" && name !== "SemiColonContext") {
              return child;
          }
      }
      return null;
  }

  collectDeclarations(ctx) {
    // Pass 1: Names only
    for (const stmt of ctx.statement()) {
      let decl = this.getDeclFromStmt(stmt);
      if (!decl) continue;
      
      const isExported = this.isExported(decl) || (stmt.visibility && stmt.visibility());
      const modifier = isExported ? "public" : "private";

      if (decl.constructor.name === "TypeAliasContext") {
          this.currentScope.defineType(decl.anyIdentifier().getText(), Primitives.Any);
      } else if (decl.constructor.name === "VarDeclContext") {
          const names = this.extractNames(decl.varDeclContent().bindingPattern());
          for (const name of names) this.currentScope.define(name, { kind: "variable", type: Primitives.Any, modifier });
      } else if (decl.constructor.name === "FunctionDeclContext") {
          this.currentScope.define(decl.anyIdentifier().getText(), { kind: "function", type: Primitives.Any, modifier });
      } else if (decl.constructor.name === "MacroDeclContext") {
          this.currentScope.define(decl.anyIdentifier().getText(), { kind: "macro", type: Primitives.Any, modifier });
      } else if (decl.constructor.name === "StructDeclContext") {
          const type = new StructType(decl.anyIdentifier().getText());
          if (decl.typeParameters && decl.typeParameters()) {
              const params = decl.typeParameters().anyIdentifier().map(id => id.getText());
              const seen = new Set();
              for (const p of params) {
                  if (seen.has(p)) throw this.error(decl.typeParameters(), `Duplicate type parameter '${p}'`);
                  seen.add(p);
              }
              type.typeParams = params;
          }
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "type", type, modifier });
      } else if (decl.constructor.name === "ClassDeclContext") {
          const type = new ClassType(decl.anyIdentifier(0).getText());
          if (decl.typeParameters && decl.typeParameters()) {
              const params = decl.typeParameters().anyIdentifier().map(id => id.getText());
              const seen = new Set();
              for (const p of params) {
                  if (seen.has(p)) throw this.error(decl.typeParameters(), `Duplicate type parameter '${p}'`);
                  seen.add(p);
              }
              type.typeParams = params;
          }
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "type", type, modifier });
      } else if (decl.constructor.name === "EnumDeclContext") {
          const name = decl.anyIdentifier().getText();
          const members = [];
          const values = new Set();
          for (const m of decl.enumMember()) {
              const mname = m.anyIdentifier().getText();
              members.push(mname);
              if (m.Assign && m.Assign()) {
                  const val = m.StringLiteral() ? m.StringLiteral().getText() : m.DecimalLiteral().getText();
                  if (values.has(val)) throw this.error(m, `Duplicate enum value ${val}`);
                  values.add(val);
              }
          }
          const type = new EnumType(name, members);
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "enum", type, modifier });
      } else if (decl.constructor.name === "InterfaceDeclContext") {
          const type = new InterfaceType(decl.anyIdentifier().getText());
          if (decl.typeParameters && decl.typeParameters()) {
              const params = decl.typeParameters().anyIdentifier().map(id => id.getText());
              const seen = new Set();
              for (const p of params) {
                  if (seen.has(p)) throw this.error(decl.typeParameters(), `Duplicate type parameter '${p}'`);
                  seen.add(p);
              }
              type.typeParams = params;
          }
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "type", type, modifier });
      }
    }

    // Pass 2: Types/Signatures
    for (const stmt of ctx.statement()) {
        let decl = this.getDeclFromStmt(stmt);
        if (!decl) continue;
        
        if (decl.constructor.name === "TypeAliasContext") {
            this.currentScope.types.set(decl.anyIdentifier().getText(), this.resolveType(decl.type()));
        } else if (decl.constructor.name === "VarDeclContext") {
            const vdc = decl.varDeclContent();
            const names = this.extractNames(vdc.bindingPattern());
            const type = this.resolveType(vdc.type()) || Primitives.Any;
            for (const name of names) {
                const sym = this.currentScope.resolve(name);
                if (sym) sym.type = type;
            }
        } else if (decl.constructor.name === "FunctionDeclContext") {
            const name = decl.anyIdentifier().getText();
            const typeParams = (decl.typeParameters && decl.typeParameters()) ? decl.typeParameters().anyIdentifier().map(id => id.getText()) : [];
            const seenTps = new Set();
            for (const tp of typeParams) {
                if (seenTps.has(tp)) throw this.error(decl.typeParameters(), `Duplicate type parameter '${tp}'`);
                seenTps.add(tp);
            }
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            for (const tp of typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            let returnType = this.resolveType(decl.type()) || Primitives.Any;
            if (decl.ASYNC && decl.ASYNC()) returnType = new PromiseType(returnType);
            const params = [];
            if (decl.formalParameterList()) {
                for (const p of decl.formalParameterList().parameter()) {
                    const paramNames = this.extractNames(p.bindingPattern());
                    const paramType = this.resolveType(p.type()) || Primitives.Any;
                    for (const pn of paramNames) {
                        params.push({ 
                            name: pn, 
                            type: paramType,
                            isVariadic: !!p.ELLIPSIS()
                        });
                    }
                }
            }
            this.currentScope = prevScope;
            const sym = this.currentScope.resolve(name);
            if (sym) sym.type = new FunctionType(params, returnType, params.some(p => p.isVariadic), typeParams);
        } else if (decl.constructor.name === "StructDeclContext") {
            const type = this.currentScope.resolveTypeType(decl.anyIdentifier().getText());
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            const seenFields = new Set();
            for (const f of decl.structField()) {
                const fname = f.anyIdentifier().getText();
                if (seenFields.has(fname)) throw this.error(f, `Duplicate field '${fname}'`);
                seenFields.add(fname);
                type.fields[fname] = this.resolveType(f.type());
            }
            this.currentScope = prevScope;
        } else if (decl.constructor.name === "ClassDeclContext") {
            const type = this.currentScope.resolveTypeType(decl.anyIdentifier(0).getText());
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            if (decl.EXTENDS()) type.baseClass = this.resolveType(decl.anyIdentifier(1));
            const seenMembers = new Set();
            for (const el of decl.classElement()) {
                if (el.anyIdentifier && typeof el.anyIdentifier === 'function') {
                    const mname = el.anyIdentifier().getText();
                    const isGet = !!(el.GET && el.GET());
                    const isSet = !!(el.SET && el.SET());
                    const key = (isGet ? "get " : (isSet ? "set " : "")) + mname;
                    if (seenMembers.has(key)) throw this.error(el, `Duplicate member '${key}'`);
                    seenMembers.add(key);

                    const mTypeParams = (el.typeParameters && el.typeParameters()) ? el.typeParameters().anyIdentifier().map(id => id.getText()) : [];
                    const mScope = new Scope(this.currentScope);
                    for (const mtp of mTypeParams) mScope.defineType(mtp, new GenericParameterType(mtp));
                    const outerScope = this.currentScope;
                    this.currentScope = mScope;
                    let rtype = this.resolveType(el.type());
                    if (el.ASYNC && el.ASYNC()) rtype = new PromiseType(rtype);
                    const mparams = [];
                    if (el.formalParameterList()) {
                        for (const p of el.formalParameterList().parameter()) {
                            const paramNames = this.extractNames(p.bindingPattern());
                            const paramType = this.resolveType(p.type()) || Primitives.Any;
                            for (const pn of paramNames) {
                                mparams.push({ 
                                    name: pn, 
                                    type: paramType,
                                    isVariadic: !!p.ELLIPSIS()
                                });
                            }
                        }
                    }
                    
                    if (isGet) {
                        type.fields[mname] = { type: rtype, modifier: "public" };
                    } else if (isSet) {
                        const setType = mparams[0]?.type || Primitives.Any;
                        type.fields[mname] = { type: setType, modifier: "public" };
                    } else {
                        type.methods[mname] = { type: new FunctionType(mparams, rtype, mparams.some(p => p.isVariadic), mTypeParams), modifier: "public" };
                    }
                    this.currentScope = outerScope;
                } else if (el.varDeclContent && typeof el.varDeclContent === 'function') {
                    const vdc = el.varDeclContent();
                    const names = this.extractNames(vdc.bindingPattern());
                    const fType = this.resolveType(vdc.type());
                    for (const fname of names) {
                        type.fields[fname] = { type: fType, modifier: "private" };
                    }
                }
            }
            this.currentScope = prevScope;
        } else if (decl.constructor.name === "InterfaceDeclContext") {
            const type = this.currentScope.resolveTypeType(decl.anyIdentifier().getText());
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            const seenFields = new Set();
            for (const f of decl.interfaceField()) {
                const fname = f.anyIdentifier().getText();
                if (seenFields.has(fname)) throw this.error(f, `Duplicate field '${fname}'`);
                seenFields.add(fname);
                type.fields[fname] = this.resolveType(f.type());
            }
            this.currentScope = prevScope;
        }
    }
  }

  extractNames(p) {
      if (!p) return [];
      if (p.anyIdentifier && p.anyIdentifier()) {
          const ids = p.anyIdentifier();
          return Array.isArray(ids) ? ids.map(id => id.getText()) : [ids.getText()];
      }
      if (p.arrayBindingPattern && p.arrayBindingPattern()) {
          return p.arrayBindingPattern().bindingPattern().flatMap(bp => this.extractNames(bp));
      }
      if (p.objectBindingPattern && p.objectBindingPattern()) {
          return p.objectBindingPattern().objectBindingElement().flatMap(e => {
              if (e.bindingPattern && e.bindingPattern()) return this.extractNames(e.bindingPattern());
              return [e.anyIdentifier().getText()];
          });
      }
      return [];
  }

  injectBuiltins() {
    this.currentScope.defineType("Number", Primitives.Number);
    this.currentScope.defineType("number", Primitives.Number);
    this.currentScope.defineType("String", Primitives.String);
    this.currentScope.defineType("string", Primitives.String);
    this.currentScope.defineType("Boolean", Primitives.Boolean);
    this.currentScope.defineType("boolean", Primitives.Boolean);
    this.currentScope.defineType("any", Primitives.Any);
    this.currentScope.defineType("unknown", Primitives.Unknown);
    this.currentScope.defineType("void", Primitives.Void);
    this.currentScope.defineType("null", Primitives.Null);
    this.currentScope.defineType("RegExp", new NominalType("RegExp", "class"));
    this.currentScope.define("console", { kind: "object", type: new ClassType("Console", null, {}, { log: { type: new FunctionType([], Primitives.Void, true), modifier: "public" } }) });
  }

  injectImports(file, seen = new Set()) {
    if (seen.has(file)) return;
    seen.add(file);
    const module = this.modules.get(file);
    if (!module) return;

    // First, process re-exports (export * from)
    for (const stmt of module.tree.statement()) {
        const exportStmt = stmt.exportStmt?.();
        if (exportStmt && exportStmt.StringLiteral && exportStmt.StringLiteral()) {
            const raw = exportStmt.StringLiteral().getText().slice(1, -1);
            // Resolve this relative to current file
            let resolved;
            if (raw.startsWith(".")) {
                resolved = path.resolve(path.dirname(file), raw.endsWith(".zs") ? raw : raw + ".zs");
                if (!this.modules.has(resolved)) resolved = resolved.replace(/\.zs$/, ".dh");
            } else {
                resolved = path.resolve(process.cwd(), "zsc_modules", raw, raw + ".dh");
                if (!this.modules.has(resolved)) resolved = resolved.replace(/\.dh$/, ".zs");
            }
            
            // Ensure target module's re-exports are also resolved
            if (this.analyzers?.has(resolved)) {
                this.analyzers.get(resolved).analyzer.injectImports(resolved, seen);
            }

            const targetMod = this.modules.get(resolved);
            if (targetMod && targetMod.exports) {
                const targetAnalyzer = this.analyzers?.get(resolved)?.analyzer;
                for (const [name, sym] of targetMod.exports) {
                    let type = Primitives.Any;
                    let modifier = "public";
                    if (targetAnalyzer) {
                        const resolvedSym = targetAnalyzer.currentScope.resolve(name);
                        const resolvedType = targetAnalyzer.currentScope.resolveType(name);
                        type = resolvedType || resolvedSym?.type || Primitives.Any;
                    }
                    if (sym.kind === "type" || sym.kind === "struct" || sym.kind === "class" || sym.kind === "enum" || sym.kind === "interface") {
                        if (!this.currentScope.types.has(name)) this.currentScope.defineType(name, type);
                    }
                    if (!this.currentScope.symbols.has(name)) this.currentScope.define(name, { kind: sym.kind, type, modifier });
                    // Also update the module's own export map so others can see it
                    if (!module.exports.has(name)) {
                        module.exports.set(name, sym);
                    }
                }
            }
        }
    }

    for (const imp of module.imports) {
      if (imp.isAPI || imp.isJS) {
        const impStmt = imp.ctx;
        if (impStmt.constructor.name === "ImportStmtContext" && impStmt.importItems && impStmt.importItems()) {
          for (const item of impStmt.importItems().importItem()) {
            const originalName = item.anyIdentifier(0).getText();
            const alias = item.anyIdentifier(1) ? item.anyIdentifier(1).getText() : originalName;
            this.currentScope.define(alias, { kind: "variable", type: Primitives.Any, modifier: "public" });
            this.currentScope.defineType(alias, Primitives.Any);
          }
        } else if (impStmt.constructor.name === "ImportStmtContext" && impStmt.anyIdentifier && impStmt.anyIdentifier()) {
            const ids = impStmt.anyIdentifier();
            const alias = Array.isArray(ids) ? ids[ids.length - 1].getText() : ids.getText();
            this.currentScope.define(alias, { kind: "variable", type: Primitives.Any, modifier: "public" });
            this.currentScope.defineType(alias, Primitives.Any);
        }
        continue;
      }

      // Ensure imported module's re-exports are resolved
      if (this.analyzers?.has(imp.path)) {
          this.analyzers.get(imp.path).analyzer.injectImports(imp.path, seen);
      }

      const importedModule = this.modules.get(imp.path);
      if (!importedModule) continue;
      const importedAnalyzer = this.analyzers?.get(imp.path)?.analyzer;
      const impStmt = imp.ctx;
      if (impStmt.constructor.name === "ImportStmtContext" && impStmt.importItems && impStmt.importItems()) {
        for (const item of impStmt.importItems().importItem()) {
          const originalName = item.anyIdentifier(0).getText();
          const alias = item.anyIdentifier(1) ? item.anyIdentifier(1).getText() : originalName;
          const symbol = importedModule.exports.get(originalName);
          
          if (!symbol) throw this.error(item, `Module '${imp.path}' has no export '${originalName}'`);
          
          let type = Primitives.Any;
          let modifier = "public";
          if (importedAnalyzer) {
              const resolvedSym = importedAnalyzer.currentScope.resolve(originalName);
              const resolvedType = importedAnalyzer.currentScope.resolveType(originalName);
              type = resolvedType || resolvedSym?.type || Primitives.Any;
              modifier = resolvedSym?.modifier || "public";
          }
          if (symbol.kind === "type" || symbol.kind === "struct" || symbol.kind === "class" || symbol.kind === "enum" || symbol.kind === "interface") {
              if (!this.currentScope.types.has(alias)) this.currentScope.defineType(alias, type);
          }
          if (!this.currentScope.symbols.has(alias)) this.currentScope.define(alias, { kind: symbol.kind, type, modifier });
        }
      }
    }
  }

  visitVarDecl(ctx) {
    const vdc = ctx.varDeclContent();
    const explicitTypeNode = vdc.type();
    const declaredType = this.resolveType(explicitTypeNode);
    const valueType = vdc.expression() ? this.visit(vdc.expression()) : Primitives.Any;
    
    const modifier = this.isExported(ctx) ? "public" : "private";
    this.assignPattern(vdc.bindingPattern(), explicitTypeNode ? declaredType : valueType, modifier);

    if (explicitTypeNode) {
        try { assertAssignable(declaredType, valueType, `Invalid assignment`); } catch (e) { throw this.error(ctx, e.message); }
    }
  }

  assignPattern(pattern, type, modifier) {
      if (pattern.anyIdentifier && typeof pattern.anyIdentifier === 'function') {
          const res = pattern.anyIdentifier();
          if (!res) return;
          const name = res.getText();
          const existing = this.currentScope.resolve(name);
          if (existing && (existing.type === Primitives.Any || !existing.type)) {
              existing.type = type;
          } else if (!existing || this.currentScope.parent) {
              try { this.currentScope.define(name, { kind: "variable", type: type || Primitives.Any, modifier }); } catch(e) {
                  // ignore duplicates in some contexts
              }
          }
      } else if (pattern.arrayBindingPattern && pattern.arrayBindingPattern()) {
          const innerPatterns = pattern.arrayBindingPattern().bindingPattern();
          const elemType = type instanceof ArrayType ? type.elementType : Primitives.Any;
          for (const p of innerPatterns) {
              this.assignPattern(p, elemType, modifier);
          }
      } else if (pattern.objectBindingPattern && pattern.objectBindingPattern()) {
          for (const el of pattern.objectBindingPattern().objectBindingElement()) {
              const id = el.anyIdentifier().getText();
              let fieldType = Primitives.Any;
              if (type instanceof StructType || type instanceof ClassType || type instanceof InterfaceType) {
                  const info = type.fields[id];
                  fieldType = info?.type || info || Primitives.Any;
              }
              if (el.bindingPattern && el.bindingPattern()) {
                  this.assignPattern(el.bindingPattern(), fieldType, modifier);
              } else {
                  const name = el.anyIdentifier().getText();
                  const existing = this.currentScope.resolve(name);
                  if (existing && (existing.type === Primitives.Any || !existing.type)) {
                      existing.type = fieldType;
                  } else if (!existing || this.currentScope.parent) {
                      this.currentScope.define(name, { kind: "variable", type: fieldType, modifier });
                  }
              }
          }
      }
  }

  visitFunctionDecl(ctx) {
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return;
    const name = ctx.anyIdentifier().getText();
    const sym = this.currentScope.resolve(name);
    if (!sym) throw this.error(ctx, `Internal error: Function '${name}' not found`);
    const type = sym.type;
    const isAsync = !!(ctx.ASYNC && ctx.ASYNC());
    
    const fnScope = new Scope(this.currentScope);
    const prevScope = this.currentScope;
    this.currentScope = fnScope;

    if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
    const explicitReturn = this.resolveType(ctx.type());
    this.currentFunctionReturnType = explicitReturn || Primitives.Any;
    
    const prevAsync = this.inAsync;
    this.inAsync = isAsync;
    for (const p of type.params) {
        this.currentScope.define(p.name, { kind: "variable", type: p.type, modifier: "public" });
    }
    
    if (ctx.block && ctx.block()) {
        this.visit(ctx.block());
    }

    this.currentFunctionReturnType = null;
    this.inAsync = prevAsync;
    this.currentScope = prevScope;
  }

  visitReturnStatement(ctx) {
    const actualType = ctx.expression() ? this.visit(ctx.expression()) : Primitives.Void;
    if (!this.currentFunctionReturnType) throw this.error(ctx, "Return statement outside of function");
    try { assertAssignable(this.currentFunctionReturnType, actualType, "Invalid return type"); } catch (e) { throw this.error(ctx, e.message); }
  }

  visitIdentifierExpr(ctx) {
    const name = ctx.getText();
    const sym = this.currentScope.resolve(name);
    if (!sym) {
        const type = this.currentScope.resolveType(name);
        if (type) return type;
        throw this.error(ctx, `Undefined identifier '${name}'`);
    }
    return sym.type || Primitives.Any;
  }

  visitLiteralExpr(ctx) {
    const lit = ctx.literal();
    if (lit.RegexLiteral && lit.RegexLiteral()) return this.currentScope.resolveType("RegExp") || new NominalType("RegExp", "class");
    const t = ctx.getText();
    if (t === "true" || t === "false") return new LiteralType(t === "true");
    if (t === "null") return Primitives.Null;
    if (t.endsWith("n")) return Primitives.Number; // BigInt as Number for now
    if (t.startsWith('"') || t.startsWith("'") || t.startsWith("`")) return new LiteralType(t.slice(1, -1));
    if (!isNaN(Number(t))) return new LiteralType(Number(t));
    return Primitives.Number;
  }

  visitBinaryOp(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    const op = ctx.getChild(1).getText();
    if (['+', '-', '*', '/', '%'].includes(op)) {
        if (op === '+' && (l.isAssignableTo(Primitives.String) || r.isAssignableTo(Primitives.String))) return Primitives.String;
        return Primitives.Number;
    }
    return Primitives.Boolean;
  }
  visitCompareOp(ctx) { 
      const l = this.visit(ctx.expression(0)); 
      const r = this.visit(ctx.expression(1)); 
      return Primitives.Boolean; 
  }
  visitLogicalOp(ctx) { this.visit(ctx.expression(0)); this.visit(ctx.expression(1)); return Primitives.Boolean; }
  visitUnaryOp(ctx) { const e = this.visit(ctx.expression()); return ctx.NOT() ? Primitives.Boolean : e; }

  visitAssignmentExpr(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    try { assertAssignable(l, r, "Invalid assignment"); } catch (e) { throw this.error(ctx, e.message); }
    return l;
  }

  visitNewExpression(ctx) {
    const name = ctx.expression().getText();
    let type = this.currentScope.resolveTypeType ? this.currentScope.resolveTypeType(name) : this.currentScope.resolveType(name);
    if (!type) throw this.error(ctx, `Unknown constructor '${name}'`);
    if (ctx.typeArguments && ctx.typeArguments()) {
        const args = ctx.typeArguments().type().map(t => this.resolveType(t));
        if (type instanceof NominalType) {
            const applied = Object.assign(Object.create(Object.getPrototypeOf(type)), type);
            applied.typeArgs = args;
            type = applied;
        }
    }
    if (type instanceof StructType) {
      const arg = ctx.arguments()?.expression()[0];
      if (!arg || !arg.objectLiteral) throw this.error(ctx, `Struct '${name}' requires object literal`);
      const mapping = {};
      if (type.typeParams) for (let i = 0; i < type.typeParams.length; i++) mapping[type.typeParams[i]] = type.typeArgs[i] || Primitives.Any;

      for (const prop of arg.objectLiteral().property()) {
        if (!prop.anyIdentifier) continue; 
        const fieldId = Array.isArray(prop.anyIdentifier()) ? prop.anyIdentifier()[0] : prop.anyIdentifier();
        if (!fieldId) continue;
        const field = fieldId.getText();
        const fieldInfo = type.fields[field];
        if (!fieldInfo) throw this.error(ctx, `Unknown field '${field}' on struct '${name}'`);
        const rawExpected = fieldInfo.type || fieldInfo;
        const expected = this.substitute(rawExpected, mapping);
        try { assertAssignable(expected, this.visit(prop.expression()), `Invalid field '${field}'`); } catch (e) { throw this.error(prop, e.message); }
      }
      return type;
    }
    if (type instanceof ClassType) {
        if (ctx.typeArguments && ctx.typeArguments()) {
            const args = ctx.typeArguments().type().map(t => this.resolveType(t));
            const applied = Object.assign(Object.create(Object.getPrototypeOf(type)), type);
            applied.typeArgs = args;
            return applied;
        }
        return type;
    }
    throw this.error(ctx, `'${name}' is not constructible`);
  }

  visitMemberIndex(ctx) {
    const baseType = this.visit(ctx.expression());
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return Primitives.Any;
    const member = ctx.anyIdentifier().getText();
    if (baseType instanceof EnumType) return baseType.members.includes(member) ? baseType : Primitives.Any;
    
    if (baseType === Primitives.String && member === "length") return Primitives.Number;

    const mapping = {};
    if (baseType instanceof NominalType && baseType.typeParams) {
        for (let i = 0; i < baseType.typeParams.length; i++) mapping[baseType.typeParams[i]] = baseType.typeArgs[i] || Primitives.Any;
    }

    if (baseType instanceof StructType) {
        const fieldInfo = baseType.fields[member];
        if (!fieldInfo) return Primitives.Any;
        return this.substitute(fieldInfo.type || fieldInfo, mapping);
    }
    if (baseType instanceof ClassType) {
      const info = baseType.fields[member] || baseType.methods[member];
      if (!info) throw this.error(ctx, `Class '${baseType.name}' has no member '${member}'`);
      return this.substitute(info.type || info, mapping);
    }
    return Primitives.Any;
  }

  visitGenericCallExpression(ctx) { return this.visitCallExpression(ctx); }
  visitCallExpression(ctx) {
    let fnType = this.visit(ctx.expression());
    if (ctx.typeArguments && ctx.typeArguments() && fnType instanceof FunctionType) {
        const args = ctx.typeArguments().type().map(t => this.resolveType(t));
        const mapping = {};
        for (let i = 0; i < fnType.typeParams.length && i < args.length; i++) mapping[fnType.typeParams[i]] = args[i];
        fnType = new FunctionType(fnType.params.map(p => ({ name: p.name, type: this.substitute(p.type, mapping) })), this.substitute(fnType.returnType, mapping), fnType.isVariadic, []);
    }
    if (!(fnType instanceof FunctionType)) return Primitives.Any;
    const args = ctx.arguments() ? ctx.arguments().expression() : [];
    for (let i = 0; i < args.length; i++) {
        if (i < fnType.params.length) {
            try { assertAssignable(fnType.params[i].type, this.visit(args[i]), `Invalid argument at index ${i}`); } catch (e) { throw this.error(args[i], e.message); }
        }
    }
    return fnType.returnType;
  }

  visitArrayAccess(ctx) {
    const base = this.visit(ctx.expression(0));
    try { assertAssignable(Primitives.Number, this.visit(ctx.expression(1)), "Array index must be Number"); } catch (e) { throw this.error(ctx, e.message); }
    return base instanceof ArrayType ? base.elementType : Primitives.Any;
  }

  visitArrayExpr(ctx) {
    const elements = ctx.arrayLiteral().arguments() ? ctx.arrayLiteral().arguments().expression() : [];
    if (elements.length === 0) return new ArrayType(Primitives.Any);
    const firstType = this.visit(elements[0]);
    return new ArrayType(firstType);
  }
  
  visitThisExpr(ctx) { if (!this.currentClass) throw this.error(ctx, "'this' used outside of class"); return this.currentClass; }
  visitParenthesizedExpr(ctx) { return this.visit(ctx.expression()); }
  visitPipeExpr(ctx) {
    const leftType = this.visit(ctx.expression(0));
    const rightType = this.visit(ctx.expression(1));
    if (!(rightType instanceof FunctionType)) return Primitives.Any;
    return rightType.returnType;
  }

  visitMatchExpr(ctx) {
    const targetType = this.visit(ctx.expression());
    let resultType = null;
    for (const arm of ctx.matchArm()) {
      let armResultType = arm.block() ? this.visit(arm.block()) : this.visit(arm.expression(arm.DEFAULT && arm.DEFAULT() ? 0 : 1));
      if (!armResultType) armResultType = Primitives.Void;
      if (!resultType) resultType = armResultType;
    }
    return resultType || Primitives.Void;
  }

  visitBlock(ctx) {
    const prev = this.currentScope;
    this.currentScope = new Scope(prev);
    let lastType = Primitives.Void;
    for (const stmt of ctx.statement()) lastType = this.visit(stmt) || Primitives.Void;
    this.currentScope = prev;
    return lastType;
  }
  
  visitExpressionStatement(ctx) { return this.visit(ctx.expression()); }
  visitIfStatement(ctx) {
      const condExpr = ctx.expression();
      const condType = this.visit(condExpr);
      assertAssignable(Primitives.Boolean, condType, "If condition must be Boolean");
      
      const narrowing = this.getNarrowing(condExpr);
      if (narrowing) {
          const prev = this.currentScope;
          this.currentScope = new Scope(prev);
          this.currentScope.define(narrowing.name, { kind: "variable", type: narrowing.type, modifier: "private" });
          this.visit(ctx.statement(0));
          this.currentScope = prev;
      } else {
          this.visit(ctx.statement(0));
      }
      
      if (ctx.ELSE && ctx.ELSE()) {
          this.visit(ctx.statement(1));
      }
  }

  getNarrowing(ctx) {
      // Handle x != null
      if (ctx.constructor.name === "CompareOpContext") {
          const left = ctx.expression(0);
          const right = ctx.expression(1);
          const op = ctx.getChild(1).getText();
          if (op === "!=" || op === "!==") {
              if (right.getText() === "null" && left.constructor.name === "IdentifierExprContext") {
                  const name = left.getText();
                  const sym = this.currentScope.resolve(name);
                  if (sym && sym.type instanceof UnionType) {
                      const narrowed = sym.type.types.filter(t => t !== Primitives.Null);
                      if (narrowed.length === 1) return { name, type: narrowed[0] };
                      if (narrowed.length > 0) return { name, type: new UnionType(narrowed) };
                  }
              }
          }
          if (op === "==" || op === "===") {
              if (left.constructor.name === "TypeofExprContext" && right.literal && right.literal() && right.literal().StringLiteral()) {
                  const typeName = right.literal().StringLiteral().getText().slice(1, -1);
                  const target = left.expression();
                  if (target.constructor.name === "IdentifierExprContext") {
                      const name = target.getText();
                      const sym = this.currentScope.resolve(name);
                      if (sym) {
                          if (typeName === "string") return { name, type: Primitives.String };
                          if (typeName === "number") return { name, type: Primitives.Number };
                          if (typeName === "boolean") return { name, type: Primitives.Boolean };
                      }
                  }
              }
          }
      }
      return null;
  }
  visitWhileStatement(ctx) { this.visit(ctx.expression()); this.visit(ctx.statement()); }
  visitForStatement(ctx) {
      const prev = this.currentScope;
      this.currentScope = new Scope(prev);
      if (ctx.varDecl && ctx.varDecl()) {
          this.visit(ctx.varDecl());
      } else if ((ctx.IN && ctx.IN()) || (ctx.OF && ctx.OF())) {
          const expr = ctx.expression(ctx.expression().length - 1);
          const type = this.visit(expr);
          let elemType = Primitives.Any;
          if (ctx.OF && ctx.OF() && type instanceof ArrayType) {
              elemType = type.elementType;
          } else if (ctx.IN && ctx.IN()) {
              elemType = Primitives.String;
          }
          this.assignPattern(ctx.bindingPattern(), elemType, "private");
      }
      this.visit(ctx.statement());
      this.currentScope = prev;
  }
  
  visitTryStatement(ctx) {
      this.visit(ctx.block(0));
      if (ctx.CATCH && ctx.CATCH()) {
          const prev = this.currentScope;
          this.currentScope = new Scope(prev);
          this.visit(ctx.block(1));
          this.currentScope = prev;
      }
      if (ctx.FINALLY && ctx.FINALLY()) this.visit(ctx.block(2));
  }
  
  visitClassDecl(ctx) {
      const name = ctx.anyIdentifier(0).getText();
      const type = this.currentScope.resolveTypeType(name);
      const prevClass = this.currentClass;
      this.currentClass = type;
      const prevScope = this.currentScope;
      this.currentScope = new Scope(prevScope);
      if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
      for (const [mname, mInfo] of Object.entries(type.methods)) this.currentScope.define(mname, { kind: "method", type: mInfo.type, modifier: mInfo.modifier });
      for (const [fname, fInfo] of Object.entries(type.fields)) this.currentScope.define(fname, { kind: "field", type: fInfo.type, modifier: fInfo.modifier });
      for (const el of ctx.classElement()) this.visit(el);
      this.currentScope = prevScope;
      this.currentClass = prevClass;
  }
  
  visitTypeAlias(ctx) {
      if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return;
      const name = ctx.anyIdentifier().getText();
      const type = this.resolveType(ctx.type());
      if (!this.currentScope.resolveType(name)) this.currentScope.defineType(name, type);
  }

  visitClassMethod(ctx) {
      if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return;
      const mname = ctx.anyIdentifier().getText();
      const isGet = !!(ctx.GET && ctx.GET());
      const isSet = !!(ctx.SET && ctx.SET());
      
      const prevScope = this.currentScope;
      this.currentScope = new Scope(prevScope);

      if (isGet) {
          this.currentFunctionReturnType = this.resolveType(ctx.type()) || Primitives.Any;
      } else if (isSet) {
          this.currentFunctionReturnType = Primitives.Void;
          if (ctx.formalParameterList()) {
              for (const p of ctx.formalParameterList().parameter()) {
                  const ptype = this.resolveType(p.type()) || Primitives.Any;
                  for (const pn of this.extractNames(p.bindingPattern())) {
                      this.currentScope.define(pn, { kind: "variable", type: ptype, modifier: "public" });
                  }
              }
          }
      } else {
          const mInfo = this.currentClass.methods[mname];
          if (mInfo) {
              const mtype = mInfo.type;
              if (mtype.typeParams) for (const tp of mtype.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
              this.currentFunctionReturnType = mtype.returnType instanceof PromiseType ? mtype.returnType.typeArgs[0] : mtype.returnType;
              for (const p of mtype.params) {
                  this.currentScope.define(p.name, { kind: "variable", type: p.type, modifier: "public" });
              }
          }
      }

      if (ctx.block && ctx.block()) {
          this.visit(ctx.block());
      }
      this.currentFunctionReturnType = null;
      this.currentScope = prevScope;
  }

  visitClassMethodWithFn(ctx) { return this.visitClassMethod(ctx); }

  substitute(type, mapping) {
      if (!type) return type;
      if (type instanceof GenericParameterType) return mapping[type.name] || type;
      if (type instanceof ArrayType) return new ArrayType(this.substitute(type.elementType, mapping));
      if (type instanceof NominalType) {
          const applied = Object.assign(Object.create(Object.getPrototypeOf(type)), type);
          applied.typeArgs = type.typeArgs.map(t => this.substitute(t, mapping));
          return applied;
      }
      if (type instanceof PromiseType) return new PromiseType(this.substitute(type.typeArgs[0], mapping));
      if (type instanceof UnionType) return new UnionType(type.types.map(t => this.substitute(t, mapping)));
      return type;
  }

  visitAwaitExpr(ctx) {
      const promiseType = this.visit(ctx.expression());
      if (promiseType instanceof PromiseType) return promiseType.typeArgs[0];
      return promiseType;
  }

  visitYieldExpr(ctx) {
      if (ctx.expression && ctx.expression()) this.visit(ctx.expression());
      return Primitives.Any;
  }

  visitLambdaExpr(ctx) {
      const prevScope = this.currentScope;
      this.currentScope = new Scope(prevScope);
      const body = ctx.block ? ctx.block() : ctx.expression();
      let returnType = body ? this.visit(body) : Primitives.Void;
      this.currentScope = prevScope;
      return new FunctionType([], returnType || Primitives.Void);
  }

  visitTernaryExpr(ctx) {
      this.visit(ctx.expression(0));
      const left = this.visit(ctx.expression(1));
      const right = this.visit(ctx.expression(2));
      return new UnionType([left, right]);
  }

  visitNullishCoalescingExpr(ctx) {
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.expression(1));
      return new UnionType([left, right]);
  }

  visitOptionalChainingExpr(ctx) {
      this.visit(ctx.expression());
      return Primitives.Any; 
  }

  visitTypeofExpr(ctx) {
      this.visit(ctx.expression());
      return Primitives.String;
  }

  visitObjectExpr(ctx) { return this.visit(ctx.objectLiteral()); }
  visitObjectLiteral(ctx) {
      const fields = {};
      for (const prop of ctx.property()) {
          if (prop.anyIdentifier && typeof prop.anyIdentifier === 'function') {
              const res = prop.anyIdentifier();
              if (res) {
                  const id = Array.isArray(res) ? res[0].getText() : res.getText();
                  fields[id] = (prop.expression && prop.expression()) ? this.visit(prop.expression()) : Primitives.Any;
              }
          }
      }
      return new InterfaceType("anonymous", fields);
  }

  visitMacroDecl(ctx) { return Primitives.Void; }
  visitMacroCallExpression(ctx) { return Primitives.Any; }
  visitComptimeStmt(ctx) { return Primitives.Void; }
  visitComptimeVarDecl(ctx) { return Primitives.Void; }
  visitLabeledStatement(ctx) { return this.visit(ctx.statement()); }
  visitDebuggerStmt(ctx) { return Primitives.Void; }
}
