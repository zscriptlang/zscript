import ZScriptVisitor from "../ZScriptVisitor.js";
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
  NominalType
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
    if (ctx.getChildCount() === 3 && ctx.getChild(1).getText() === "|") {
      return new UnionType([this.resolveType(ctx.type(0)), this.resolveType(ctx.type(1))]);
    }
    const name = ctx.Identifier().getText();
    let type = this.currentScope.resolveTypeType ? this.currentScope.resolveTypeType(name) : this.currentScope.resolveType(name);
    if (!type) {
      if (name === "Number") type = Primitives.Number;
      else if (name === "String") type = Primitives.String;
      else if (name === "Boolean") type = Primitives.Boolean;
      else if (name === "any") type = Primitives.Any;
      else if (name === "void") type = Primitives.Void;
      else if (name === "null") type = Primitives.Null;
      else if (name === "Promise") type = new PromiseType(Primitives.Any);
      else {
          type = this.currentScope.resolveType(name);
          if (!type) throw this.error(ctx, `Unknown type '${name}'`);
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
    this.currentScope = new Scope(null);
    this.injectBuiltins();
    this.injectImports(this.entryFile);
    this.collectDeclarations(ctx);
    for (const stmt of ctx.statement()) this.visit(stmt);
  }

  getModifier(ctx) {
      if (!ctx) return "public";
      if (ctx.modifier && typeof ctx.modifier === 'function' && ctx.modifier()) return ctx.modifier().getText().toLowerCase();
      if (ctx.varDecl && typeof ctx.varDecl === 'function' && ctx.varDecl()) return this.getModifier(ctx.varDecl());
      return "public";
  }

  collectDeclarations(ctx) {
    for (const stmt of ctx.statement()) {
      let decl = stmt.getChild(0);
      if (decl.constructor.name === "ExportStmtContext") decl = decl.getChild(1);
      const modifier = this.getModifier(decl);
      if (decl.constructor.name === "TypeAliasContext") {
          this.currentScope.defineType(decl.Identifier().getText(), Primitives.Any);
      } else if (decl.constructor.name === "FunctionDeclContext") {
          this.currentScope.define(decl.Identifier().getText(), { kind: "function", type: Primitives.Any, modifier });
      } else if (decl.constructor.name === "StructDeclContext") {
          const type = new StructType(decl.Identifier().getText());
          if (decl.typeParameters && decl.typeParameters()) type.typeParams = decl.typeParameters().Identifier().map(id => id.getText());
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "type", type, modifier });
      } else if (decl.constructor.name === "ClassDeclContext") {
          const type = new ClassType(decl.Identifier(0).getText());
          if (decl.typeParameters && decl.typeParameters()) type.typeParams = decl.typeParameters().Identifier().map(id => id.getText());
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "type", type, modifier });
      } else if (decl.constructor.name === "EnumDeclContext") {
          const type = new EnumType(decl.Identifier(0).getText(), decl.Identifier().slice(1).map(id => id.getText()));
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "enum", type, modifier });
      } else if (decl.constructor.name === "InterfaceDeclContext") {
          const type = new InterfaceType(decl.Identifier().getText());
          if (decl.typeParameters && decl.typeParameters()) type.typeParams = decl.typeParameters().Identifier().map(id => id.getText());
          this.currentScope.defineType(type.name, type);
          this.currentScope.define(type.name, { kind: "type", type, modifier });
      }
    }
    for (const stmt of ctx.statement()) {
        let decl = stmt.getChild(0);
        if (decl.constructor.name === "ExportStmtContext") decl = decl.getChild(1);
        if (decl.constructor.name === "TypeAliasContext") {
            this.currentScope.types.set(decl.Identifier().getText(), this.resolveType(decl.type()));
        } else if (decl.constructor.name === "FunctionDeclContext") {
            const name = decl.Identifier().getText();
            const typeParams = (decl.typeParameters && decl.typeParameters()) ? decl.typeParameters().Identifier().map(id => id.getText()) : [];
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            for (const tp of typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            let returnType = this.resolveType(decl.type());
            if (decl.ASYNC && typeof decl.ASYNC === 'function' && decl.ASYNC()) returnType = new PromiseType(returnType);
            const params = [];
            if (decl.formalParameterList()) {
                for (const p of decl.formalParameterList().parameter()) params.push({ name: p.Identifier().getText(), type: this.resolveType(p.type()) });
            }
            this.currentScope = prevScope;
            const sym = this.currentScope.resolve(name);
            if (sym) sym.type = new FunctionType(params, returnType, false, typeParams);
        } else if (decl.constructor.name === "StructDeclContext") {
            const type = this.currentScope.resolveTypeType(decl.Identifier().getText());
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            for (const f of decl.structField()) type.fields[f.Identifier().getText()] = this.resolveType(f.type());
            this.currentScope = prevScope;
        } else if (decl.constructor.name === "ClassDeclContext") {
            const type = this.currentScope.resolveTypeType(decl.Identifier(0).getText());
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            if (decl.EXTENDS()) type.baseClass = this.resolveType(decl.Identifier(1));
            for (const el of decl.classElement()) {
                const elMod = this.getModifier(el);
                if (el.constructor.name === "ClassMethodContext" || el.constructor.name === "ClassMethodWithFnContext") {
                    const mname = el.Identifier().getText();
                    const mTypeParams = (el.typeParameters && el.typeParameters()) ? el.typeParameters().Identifier().map(id => id.getText()) : [];
                    const mScope = new Scope(this.currentScope);
                    for (const mtp of mTypeParams) mScope.defineType(mtp, new GenericParameterType(mtp));
                    const outerScope = this.currentScope;
                    this.currentScope = mScope;
                    let rtype = this.resolveType(el.type());
                    if (el.ASYNC && typeof el.ASYNC === 'function' && el.ASYNC()) rtype = new PromiseType(rtype);
                    const mparams = [];
                    if (el.formalParameterList()) {
                        for (const p of el.formalParameterList().parameter()) mparams.push({ name: p.Identifier().getText(), type: this.resolveType(p.type()) });
                    }
                    type.methods[mname] = { type: new FunctionType(mparams, rtype, false, mTypeParams), modifier: elMod };
                    this.currentScope = outerScope;
                } else if (el.constructor.name === "ClassFieldContext") {
                    type.fields[el.varDecl().Identifier().getText()] = { type: this.resolveType(el.varDecl().type()), modifier: elMod };
                }
            }
            this.currentScope = prevScope;
        } else if (decl.constructor.name === "InterfaceDeclContext") {
            const type = this.currentScope.resolveTypeType(decl.Identifier().getText());
            const prevScope = this.currentScope;
            this.currentScope = new Scope(prevScope);
            if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
            for (const f of decl.interfaceField()) type.fields[f.Identifier().getText()] = this.resolveType(f.type());
            this.currentScope = prevScope;
        }
    }
  }

  injectBuiltins() {
    this.currentScope.defineType("Number", Primitives.Number);
    this.currentScope.defineType("String", Primitives.String);
    this.currentScope.defineType("Boolean", Primitives.Boolean);
    this.currentScope.defineType("any", Primitives.Any);
    this.currentScope.defineType("void", Primitives.Void);
    this.currentScope.defineType("null", Primitives.Null);
    this.currentScope.defineType("RegExp", new NominalType("RegExp", "class"));
    this.currentScope.define("console", { kind: "object", type: new ClassType("Console", null, {}, { log: { type: new FunctionType([], Primitives.Void, true), modifier: "public" } }) });
  }

  injectImports(file) {
    const module = this.modules.get(file);
    if (!module) return;
    for (const imp of module.imports) {
      if (imp.isAPI || imp.isJS) {
        const impStmt = imp.ctx;
        if (impStmt.importItems()) {
          for (const item of impStmt.importItems().importItem()) {
            const originalName = item.Identifier(0).getText();
            const alias = item.Identifier(1) ? item.Identifier(1).getText() : originalName;
            // Define as Any for now, we don't have types for external JS/APIs
            this.currentScope.define(alias, { kind: "variable", type: Primitives.Any, modifier: "public" });
            this.currentScope.defineType(alias, Primitives.Any);
          }
        }
        continue;
      }

      const importedModule = this.modules.get(imp.path);
      if (!importedModule) continue;
      const importedAnalyzer = this.analyzers?.get(imp.path)?.analyzer;
      const impStmt = imp.ctx;
      if (impStmt.importItems()) {
        for (const item of impStmt.importItems().importItem()) {
          const originalName = item.Identifier(0).getText();
          const alias = item.Identifier(1) ? item.Identifier(1).getText() : originalName;
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
          if (symbol.kind === "type" || symbol.kind === "struct" || symbol.kind === "class" || symbol.kind === "enum" || symbol.kind === "interface") this.currentScope.defineType(alias, type);
          this.currentScope.define(alias, { kind: symbol.kind, type, modifier });
        }
      }
    }
  }

  visitVarDecl(ctx) {
    const name = ctx.Identifier().getText();
    const declaredType = this.resolveType(ctx.type());
    const valueType = ctx.expression() ? this.visit(ctx.expression()) : Primitives.Any;
    try { assertAssignable(declaredType, valueType, `Invalid assignment to '${name}'`); } catch (e) { throw this.error(ctx, e.message); }
    const modifier = this.getModifier(ctx);
    if (!this.currentScope.resolve(name) || this.currentScope.parent) {
        try { this.currentScope.define(name, { kind: "variable", type: declaredType, modifier }); } catch(e) {
            if (!e.message.includes("Duplicate symbol") || !this.currentClass) throw e;
        }
    }
  }

  visitFunctionDecl(ctx) {
    const name = ctx.Identifier().getText();
    const sym = this.currentScope.resolve(name);
    if (!sym) throw this.error(ctx, `Internal error: Function '${name}' not found`);
    const type = sym.type;
    const isAsync = ctx.ASYNC && typeof ctx.ASYNC === 'function' && !!ctx.ASYNC();
    const fnScope = new Scope(this.currentScope);
    const prevScope = this.currentScope;
    this.currentScope = fnScope;
    this.currentFunctionReturnType = type.returnType instanceof PromiseType ? type.returnType.typeArgs[0] : type.returnType;
    const prevAsync = this.inAsync;
    this.inAsync = isAsync;
    if (type.typeParams) for (const tp of type.typeParams) this.currentScope.defineType(tp, new GenericParameterType(tp));
    for (const p of type.params) this.currentScope.define(p.name, { kind: "variable", type: p.type, modifier: "public" });
    this.visit(ctx.block());
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
    if (ctx.literal().RegexLiteral()) return this.currentScope.resolveType("RegExp") || new NominalType("RegExp", "class");
    const t = ctx.getText();
    if (t === "true" || t === "false") return Primitives.Boolean;
    if (t === "null") return Primitives.Null;
    if (t.endsWith("n")) return Primitives.Number;
    if (t.startsWith('"') || t.startsWith("'") || t.startsWith("`")) return Primitives.String;
    return Primitives.Number;
  }

  visitBinaryOp(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    const op = ctx.getChild(1).getText();
    if (['+', '-', '*', '/', '%'].includes(op)) {
        if (op === '+' && (l === Primitives.String || r === Primitives.String)) return Primitives.String;
        return Primitives.Number;
    }
    return Primitives.Boolean;
  }
  visitCompareOp(ctx) { this.visit(ctx.expression(0)); this.visit(ctx.expression(1)); return Primitives.Boolean; }
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
        const field = prop.Identifier().getText();
        const fieldInfo = type.fields[field];
        if (!fieldInfo) throw this.error(ctx, `Unknown field '${field}' on struct '${name}'`);
        const rawExpected = fieldInfo.type || fieldInfo;
        const expected = this.substitute(rawExpected, mapping);
        try { assertAssignable(expected, this.visit(prop.expression()), `Invalid field '${field}'`); } catch (e) { throw this.error(prop, e.message); }
      }
      return type;
    }
    if (type instanceof ClassType) return type;
    throw this.error(ctx, `'${name}' is not constructible`);
  }

  visitMemberIndex(ctx) {
    const baseType = this.visit(ctx.expression());
    const member = ctx.Identifier().getText();
    if (baseType instanceof EnumType) return baseType.members.includes(member) ? baseType : Primitives.Any;

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
      if (info.modifier === "private" && baseType !== this.currentClass) throw this.error(ctx, `Member '${member}' is private`);
      if (info.modifier === "protected" && baseType !== this.currentClass && (!this.currentClass || !this.currentClass.isAssignableTo(baseType))) throw this.error(ctx, `Member '${member}' is protected`);
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
    if (!(fnType instanceof FunctionType)) return fnType === Primitives.Any ? Primitives.Any : Primitives.Any;
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
    const elements = ctx.arrayLiteral().arguments()?.expression() ?? [];
    if (elements.length === 0) return new ArrayType(Primitives.Any);
    const firstType = this.visit(elements[0]);
    for (let i = 1; i < elements.length; i++) {
      try { assertAssignable(firstType, this.visit(elements[i]), "Array literal element type mismatch"); } catch (e) { throw this.error(elements[i], e.message); }
    }
    return new ArrayType(firstType);
  }

  visitThisExpr(ctx) { if (!this.currentClass) throw this.error(ctx, "'this' used outside of class"); return this.currentClass; }
  visitParenthesizedExpr(ctx) { return this.visit(ctx.expression()); }
  visitPipeExpr(ctx) {
    const leftType = this.visit(ctx.expression(0));
    const rightType = this.visit(ctx.expression(1));
    if (!(rightType instanceof FunctionType)) return Primitives.Any;
    if (rightType.params.length !== 1) throw this.error(ctx.expression(1), "Function in pipe must accept exactly one argument");
    try { assertAssignable(rightType.params[0].type, leftType, "Pipe value mismatch"); } catch (e) { throw this.error(ctx.expression(0), e.message); }
    return rightType.returnType;
  }

  visitMatchExpr(ctx) {
    const targetType = this.visit(ctx.expression());
    let resultType = null;
    for (const arm of ctx.matchArm()) {
      if (arm.expression(0) && !arm.DEFAULT()) {
        const armCondType = this.visit(arm.expression(0));
        if (armCondType) { try { assertAssignable(targetType, armCondType, "Match arm condition mismatch"); } catch (e) { throw this.error(arm.expression(0), e.message); } }
      }
      let armResultType = arm.block() ? this.visit(arm.block()) : this.visit(arm.expression(arm.DEFAULT() ? 0 : 1));
      if (!armResultType) armResultType = Primitives.Void;
      if (!resultType) resultType = armResultType;
      else if (armResultType.isAssignableTo && !armResultType.isAssignableTo(resultType)) {
          if (resultType.isAssignableTo && resultType.isAssignableTo(armResultType)) resultType = armResultType;
          else resultType = Primitives.Any;
      }
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
  visitIfStatement(ctx) { assertAssignable(Primitives.Boolean, this.visit(ctx.expression()), "If condition must be Boolean"); this.visit(ctx.statement(0)); if (ctx.ELSE()) this.visit(ctx.statement(1)); }
  visitWhileStatement(ctx) { this.visit(ctx.expression()); this.visit(ctx.statement()); }
  visitForStatement(ctx) {
      const prev = this.currentScope;
      this.currentScope = new Scope(prev);
      if (ctx.varDecl()) this.visit(ctx.varDecl());
      else if (ctx.expressionStatement()) this.visit(ctx.expressionStatement());
      if (ctx.expression(0)) this.visit(ctx.expression(0));
      if (ctx.expression(1)) this.visit(ctx.expression(1));
      this.visit(ctx.statement());
      this.currentScope = prev;
  }
  visitUnlessStmt(ctx) { this.visit(ctx.expression()); this.visit(ctx.statement()); }
  visitRepeatStmt(ctx) { assertAssignable(Primitives.Number, this.visit(ctx.expression()), "Repeat count must be Number"); this.visit(ctx.statement()); }
  visitForeverStmt(ctx) { this.visit(ctx.statement()); }
  visitDeferStmt(ctx) { this.visit(ctx.statement()); }
  visitQueueStmt(ctx) { this.visit(ctx.statement()); }
  visitFailStmt(ctx) { this.visit(ctx.expression()); }
  visitJsBlock(ctx) {}

  visitTryStatement(ctx) {
      this.visit(ctx.block(0));
      if (ctx.CATCH()) {
          const prev = this.currentScope;
          this.currentScope = new Scope(prev);
          if (ctx.Identifier()) this.currentScope.define(ctx.Identifier().getText(), { kind: "variable", type: Primitives.Any, modifier: "public" });
          this.visit(ctx.block(1));
          this.currentScope = prev;
      }
      if (ctx.FINALLY()) this.visit(ctx.block(2));
  }

  visitClassDecl(ctx) {
      const name = ctx.Identifier(0).getText();
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
      const name = ctx.Identifier().getText();
      const type = this.resolveType(ctx.type());
      if (!this.currentScope.resolveType(name)) this.currentScope.defineType(name, type);
  }

  visitClassMethod(ctx) {
      const mname = ctx.Identifier().getText();
      const mInfo = this.currentClass.methods[mname];
      const mtype = mInfo.type;
      const isAsync = ctx.ASYNC && typeof ctx.ASYNC === 'function' && !!ctx.ASYNC();
      const prevScope = this.currentScope;
      this.currentScope = new Scope(prevScope);
      this.currentFunctionReturnType = mtype.returnType instanceof PromiseType ? mtype.returnType.typeArgs[0] : mtype.returnType;
      const prevAsync = this.inAsync;
      this.inAsync = isAsync;
      if (mtype.typeParams) for (const mtp of mtype.typeParams) this.currentScope.defineType(mtp, new GenericParameterType(mtp));
      for (const p of mtype.params) this.currentScope.define(p.name, { kind: "variable", type: p.type, modifier: "public" });
      this.visit(ctx.block());
      this.currentFunctionReturnType = null;
      this.inAsync = prevAsync;
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
      if (!this.inAsync) throw this.error(ctx, "'await' only allowed in 'async' functions");
      const promiseType = this.visit(ctx.expression());
      if (promiseType instanceof PromiseType) return promiseType.typeArgs[0];
      return promiseType;
  }

  visitComptimeStmt(ctx) { return Primitives.Void; }
  visitComptimeVarDecl(ctx) { return Primitives.Void; }
}
