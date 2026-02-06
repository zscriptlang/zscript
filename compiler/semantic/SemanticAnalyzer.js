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
  InterfaceType
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
  }

  /* =====================
     ERROR HELPER
  ===================== */

  error(ctx, message) {
    const token = ctx?.start || ctx?.symbol;
    const line = token?.line ?? "?";
    const col = token?.column ?? "?";
    const contextText = ctx?.getText ? ` at '${ctx.getText()}'` : "";
    return new Error(`${this.entryFile}:${line}:${col}\nerror: ${message}${contextText}`);
  }

  /* =====================
     TYPE RESOLUTION
  ===================== */

  resolveType(ctx) {
    if (!ctx) return Primitives.Any;

    // Union type: type OR type
    if (ctx.getChildCount() === 3 && ctx.getChild(1).getText() === "|") {
      const left = this.resolveType(ctx.type(0));
      const right = this.resolveType(ctx.type(1));
      return new UnionType([left, right]);
    }

    const name = ctx.Identifier().getText();
    let type = this.currentScope.resolveType(name);

    if (!type) {
      if (name === "Number") type = Primitives.Number;
      else if (name === "String") type = Primitives.String;
      else if (name === "Boolean") type = Primitives.Boolean;
      else if (name === "any") type = Primitives.Any;
      else if (name === "void") type = Primitives.Void;
      else if (name === "null") type = Primitives.Null;
      else {
        throw this.error(ctx, `Unknown type '${name}'`);
      }
    }

    if (ctx.typeSuffix()) {
      return new ArrayType(type);
    }

    return type;
  }

  /* =====================
     PROGRAM
  ===================== */

  visitProgram(ctx) {
    this.currentScope = new Scope(null);

    this.injectBuiltins();
    this.injectImports(this.entryFile);

    // First pass: collect all top-level declarations in this file
    this.collectDeclarations(ctx);

    // Second pass: full analysis
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }
  }

  collectDeclarations(ctx) {
    for (const stmt of ctx.statement()) {
      let decl = stmt.getChild(0);
      if (decl.constructor.name === "ExportStmtContext") {
          decl = decl.getChild(1);
      }
      if (decl.constructor.name === "TypeAliasContext") {
          const name = decl.Identifier().getText();
          const type = this.resolveType(decl.type());
          this.currentScope.defineType(name, type);
      } else if (decl.constructor.name === "FunctionDeclContext") {
          const name = decl.Identifier().getText();
          const returnType = this.resolveType(decl.type());
          const params = [];
          if (decl.formalParameterList()) {
              for (const p of decl.formalParameterList().parameter()) {
                  params.push({ name: p.Identifier().getText(), type: this.resolveType(p.type()) });
              }
          }
          this.currentScope.define(name, { kind: "function", type: new FunctionType(params, returnType) });
      } else if (decl.constructor.name === "StructDeclContext") {
          const name = decl.Identifier().getText();
          const fields = {};
          // Note: fields will be resolved fully when needed or in a second pass
          const type = new StructType(name, fields);
          this.currentScope.defineType(name, type);
          this.currentScope.define(name, { kind: "type", type });
      } else if (decl.constructor.name === "ClassDeclContext") {
          const name = decl.Identifier(0).getText();
          const type = new ClassType(name);
          this.currentScope.defineType(name, type);
          this.currentScope.define(name, { kind: "type", type });
      } else if (decl.constructor.name === "EnumDeclContext") {
          const name = decl.Identifier(0).getText();
          const members = decl.Identifier().slice(1).map(id => id.getText());
          const type = new EnumType(name, members);
          this.currentScope.defineType(name, type);
          this.currentScope.define(name, { kind: "enum", type });
      } else if (decl.constructor.name === "InterfaceDeclContext") {
          const name = decl.Identifier().getText();
          const type = new InterfaceType(name);
          this.currentScope.defineType(name, type);
      }
    }

    // Fill in structures
    for (const stmt of ctx.statement()) {
        let decl = stmt.getChild(0);
        if (decl.constructor.name === "ExportStmtContext") {
            decl = decl.getChild(1);
        }
        if (decl.constructor.name === "StructDeclContext") {
            const name = decl.Identifier().getText();
            const type = this.currentScope.resolveType(name);
            for (const f of decl.structField()) {
                type.fields[f.Identifier().getText()] = this.resolveType(f.type());
            }
        } else if (decl.constructor.name === "ClassDeclContext") {
            const name = decl.Identifier(0).getText();
            const type = this.currentScope.resolveType(name);
            if (decl.EXTENDS()) {
                type.baseClass = this.currentScope.resolveType(decl.Identifier(1).getText());
            }
            for (const el of decl.classElement()) {
                if (el.constructor.name === "ClassMethodContext") {
                    const mname = el.Identifier().getText();
                    const rtype = this.resolveType(el.type());
                    const mparams = [];
                    if (el.formalParameterList()) {
                        for (const p of el.formalParameterList().parameter()) {
                            mparams.push({ name: p.Identifier().getText(), type: this.resolveType(p.type()) });
                        }
                    }
                    type.methods[mname] = new FunctionType(mparams, rtype);
                } else if (el.constructor.name === "ClassFieldContext") {
                    const fname = el.varDecl().Identifier().getText();
                    type.fields[fname] = this.resolveType(el.varDecl().type());
                }
            }
        } else if (decl.constructor.name === "InterfaceDeclContext") {
            const name = decl.Identifier().getText();
            const type = this.currentScope.resolveType(name);
            for (const f of decl.interfaceField()) {
                type.fields[f.Identifier().getText()] = this.resolveType(f.type());
            }
        }
    }
  }

  /* =====================
     BUILTINS
  ===================== */

  injectBuiltins() {
    this.currentScope.defineType("Number", Primitives.Number);
    this.currentScope.defineType("String", Primitives.String);
    this.currentScope.defineType("Boolean", Primitives.Boolean);
    this.currentScope.defineType("any", Primitives.Any);
    this.currentScope.defineType("void", Primitives.Void);
    this.currentScope.defineType("null", Primitives.Null);

    const logFn = new FunctionType([], Primitives.Void, true);
    this.currentScope.define("console", {
      kind: "object",
      type: new ClassType("Console", null, {}, { log: logFn })
    });
  }

  /* =====================
     IMPORTS
  ===================== */

  injectImports(file) {
    const module = this.modules.get(file);
    if (!module) return;

    for (const imp of module.imports) {
      const importedModule = this.modules.get(imp.path);
      if (!importedModule) continue;

      const importedAnalyzer = this.analyzers?.get(imp.path)?.analyzer;

      const impStmt = imp.ctx;
      if (impStmt.importItems()) {
        for (const item of impStmt.importItems().importItem()) {
          const originalName = item.Identifier(0).getText();
          const alias = item.Identifier(1)
            ? item.Identifier(1).getText()
            : originalName;

          const symbol = importedModule.exports.get(originalName);
          if (!symbol)
            throw this.error(
              item,
              `Module '${imp.path}' has no export '${originalName}'`
            );

          // Try to get the resolved type from the imported analyzer's scope
          let type = Primitives.Any;
          if (importedAnalyzer) {
              const resolvedSym = importedAnalyzer.currentScope.resolve(originalName);
              const resolvedType = importedAnalyzer.currentScope.resolveType(originalName);
              type = resolvedType || resolvedSym?.type || Primitives.Any;
          } else {
              type = this.resolveImportedSymbol(symbol);
          }

          if (symbol.kind === "type" || symbol.kind === "struct" || symbol.kind === "class" || symbol.kind === "enum" || symbol.kind === "interface") {
              this.currentScope.defineType(alias, type);
          }
          this.currentScope.define(alias, { kind: symbol.kind, type });
        }
      } else {
        const name = impStmt.Identifier().getText();
        this.currentScope.define(name, {
          kind: "module",
          exports: importedModule.exports
        });
      }
    }
  }

  resolveImportedSymbol(symbol) {
    if (symbol.kind === "struct") {
      const fields = {};
      for (const f in symbol.fields) fields[f] = Primitives.Any; // Placeholder
      return new StructType(symbol.name, fields);
    }
    if (symbol.kind === "class") {
      const fields = {};
      for (const f in symbol.fields) fields[f] = Primitives.Any;
      const methods = {};
      for (const m in symbol.methods) methods[m] = new FunctionType([], Primitives.Any);
      return new ClassType(symbol.name, null, fields, methods);
    }
    if (symbol.kind === "enum") return new EnumType(symbol.name, symbol.members);
    if (symbol.kind === "function") {
      return new FunctionType([], Primitives.Any);
    }
    if (symbol.kind === "interface") {
        const fields = {};
        for (const f in symbol.fields) fields[f] = Primitives.Any;
        return new InterfaceType(symbol.name, fields);
    }
    return Primitives.Any;
  }

  /* =====================
     DECLARATIONS
  ===================== */

  visitVarDecl(ctx) {
    const name = ctx.Identifier().getText();
    const declaredType = this.resolveType(ctx.type());
    const valueType = ctx.expression()
      ? this.visit(ctx.expression())
      : Primitives.Any;

    try {
      assertAssignable(declaredType, valueType, `Invalid assignment to '${name}'`);
    } catch (e) {
      throw this.error(ctx, e.message);
    }

    this.currentScope.define(name, {
      kind: "variable",
      type: declaredType
    });
  }

  visitFunctionDecl(ctx) {
    const name = ctx.Identifier().getText();
    const sym = this.currentScope.resolve(name);
    if (!sym) throw this.error(ctx, `Internal error: Function '${name}' not found in scope during analysis`);
    const type = sym.type;

    const fnScope = new Scope(this.currentScope);
    const prevScope = this.currentScope;
    this.currentScope = fnScope;
    this.currentFunctionReturnType = type.returnType;

    for (const p of type.params) {
        this.currentScope.define(p.name, { kind: "variable", type: p.type });
    }

    this.visit(ctx.block());

    this.currentFunctionReturnType = null;
    this.currentScope = prevScope;
  }

  visitReturnStatement(ctx) {
    const actualType = ctx.expression()
      ? this.visit(ctx.expression())
      : Primitives.Void;

    if (!this.currentFunctionReturnType) {
        throw this.error(ctx, "Return statement outside of function");
    }

    try {
      assertAssignable(
        this.currentFunctionReturnType,
        actualType,
        "Invalid return type"
      );
    } catch (e) {
      throw this.error(ctx, e.message);
    }
  }

  /* =====================
     EXPRESSIONS
  ===================== */

  visitIdentifierExpr(ctx) {
    const name = ctx.getText();
    const sym = this.currentScope.resolve(name);
    if (!sym) throw this.error(ctx, `Undefined identifier '${name}'`);
    return sym.type || Primitives.Any;
  }

  visitLiteralExpr(ctx) {
    const t = ctx.getText();
    if (t === "true" || t === "false") return Primitives.Boolean;
    if (t === "null") return Primitives.Null;
    if (t.endsWith("n")) return Primitives.Number; // Should be BigInt but let's use Number for now
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

  visitCompareOp(ctx) {
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      return Primitives.Boolean;
  }

  visitLogicalOp(ctx) {
      const l = this.visit(ctx.expression(0));
      const r = this.visit(ctx.expression(1));
      return Primitives.Boolean;
  }

  visitUnaryOp(ctx) {
      const e = this.visit(ctx.expression());
      if (ctx.NOT()) return Primitives.Boolean;
      return e;
  }

  visitAssignmentExpr(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    try {
      assertAssignable(l, r, "Invalid assignment");
    } catch (e) {
      throw this.error(ctx, e.message);
    }
    return l;
  }

  visitNewExpression(ctx) {
    const name = ctx.expression().getText();
    const type = this.currentScope.resolveType(name);

    if (!type) throw this.error(ctx, `Unknown constructor '${name}'`);

    if (type instanceof StructType) {
      const arg = ctx.arguments()?.expression()[0];
      if (!arg || !arg.objectLiteral) {
        throw this.error(ctx, `Struct '${name}' requires object literal`);
      }

      const objLit = arg.objectLiteral();
      for (const prop of objLit.property()) {
        const field = prop.Identifier().getText();
        const expected = type.fields[field];
        if (!expected) {
          throw this.error(ctx, `Unknown field '${field}' on struct '${name}'`);
        }
        const actual = this.visit(prop.expression());
        try {
          assertAssignable(expected, actual, `Invalid field '${field}'`);
        } catch (e) {
          throw this.error(prop, e.message);
        }
      }
      return type;
    }

    if (type instanceof ClassType) return type;

    throw this.error(ctx, `'${name}' is not constructible`);
  }

  visitMemberIndex(ctx) {
    const baseType = this.visit(ctx.expression());
    const member = ctx.Identifier().getText();

    if (baseType instanceof EnumType) {
      if (!baseType.members.includes(member)) {
        throw this.error(ctx, `Enum '${baseType.name}' has no member '${member}'`);
      }
      return baseType;
    }

    if (baseType instanceof StructType) {
      const t = baseType.fields[member];
      if (!t) throw this.error(ctx, `Struct '${baseType.name}' has no field '${member}'`);
      return t;
    }

    if (baseType instanceof ClassType) {
      const t = baseType.fields[member] || baseType.methods[member];
      if (!t) {
          console.log(`Debug: Class ${baseType.name} members:`, Object.keys(baseType.fields), Object.keys(baseType.methods));
          throw this.error(ctx, `Class '${baseType.name}' has no member '${member}'`);
      }
      return t;
    }

    return Primitives.Any;
  }

  visitCallExpression(ctx) {
    const fnType = this.visit(ctx.expression());
    if (!(fnType instanceof FunctionType)) {
        if (fnType === Primitives.Any) return Primitives.Any;
        throw this.error(ctx, "Expression is not callable");
    }

    const args = ctx.arguments() ? ctx.arguments().expression() : [];
    if (!fnType.isVariadic && args.length !== fnType.params.length) {
        throw this.error(ctx, `Expected ${fnType.params.length} arguments, got ${args.length}`);
    }

    for (let i = 0; i < args.length; i++) {
        const argType = this.visit(args[i]);
        if (i < fnType.params.length) {
            try {
                assertAssignable(fnType.params[i].type, argType, `Invalid argument at index ${i}`);
            } catch (e) {
                throw this.error(args[i], e.message);
            }
        }
    }

    return fnType.returnType;
  }

  visitArrayAccess(ctx) {
    const base = this.visit(ctx.expression(0));
    const index = this.visit(ctx.expression(1));
    try {
        assertAssignable(Primitives.Number, index, "Array index must be Number");
    } catch (e) {
        throw this.error(ctx, e.message);
    }
    if (base instanceof ArrayType) return base.elementType;
    return Primitives.Any;
  }

  visitArrayExpr(ctx) {
    const elements = ctx.arrayLiteral().arguments()?.expression() ?? [];
    if (elements.length === 0) return new ArrayType(Primitives.Any);

    const firstType = this.visit(elements[0]);
    for (let i = 1; i < elements.length; i++) {
      const t = this.visit(elements[i]);
      try {
          // This is a simplification: usually we'd find the common supertype
          assertAssignable(firstType, t, "Array literal element type mismatch");
      } catch (e) {
          throw this.error(elements[i], e.message);
      }
    }

    return new ArrayType(firstType);
  }

  visitThisExpr(ctx) {
      if (!this.currentClass) throw this.error(ctx, "'this' used outside of class");
      return this.currentClass;
  }

  visitParenthesizedExpr(ctx) {
      return this.visit(ctx.expression());
  }

  visitPipeExpr(ctx) {
    const leftType = this.visit(ctx.expression(0));
    const rightType = this.visit(ctx.expression(1));

    if (!(rightType instanceof FunctionType)) {
      if (rightType === Primitives.Any) return Primitives.Any;
      throw this.error(ctx.expression(1), "Right side of pipe must be a function");
    }

    if (rightType.params.length !== 1) {
      throw this.error(ctx.expression(1), "Function in pipe must accept exactly one argument");
    }

    try {
      assertAssignable(rightType.params[0].type, leftType, "Pipe value mismatch");
    } catch (e) {
      throw this.error(ctx.expression(0), e.message);
    }

    return rightType.returnType;
  }

  visitMatchExpr(ctx) {
    const targetType = this.visit(ctx.expression());
    let resultType = null;

    for (const arm of ctx.matchArm()) {
      if (arm.expression(0) && !arm.DEFAULT()) {
        const armCondType = this.visit(arm.expression(0));
        if (armCondType) {
          try {
            assertAssignable(targetType, armCondType, "Match arm condition mismatch");
          } catch (e) {
            throw this.error(arm.expression(0), e.message);
          }
        }
      }

      let armResultType = arm.block()
        ? this.visit(arm.block())
        : this.visit(arm.expression(arm.DEFAULT() ? 0 : 1));

      if (!armResultType) armResultType = Primitives.Void;

      if (!resultType) {
        resultType = armResultType;
      } else {
        // Simple compatibility check
        if (armResultType.isAssignableTo && !armResultType.isAssignableTo(resultType)) {
            if (resultType.isAssignableTo && resultType.isAssignableTo(armResultType)) {
                resultType = armResultType;
            } else {
                resultType = Primitives.Any; // Fallback to any for mismatched arms
            }
        }
      }
    }
    return resultType || Primitives.Void;
  }

  /* =====================
     BLOCKS & CONTROL FLOW
  ===================== */

  visitBlock(ctx) {
    const prev = this.currentScope;
    this.currentScope = new Scope(prev);
    let lastType = Primitives.Void;
    for (const stmt of ctx.statement()) {
      lastType = this.visit(stmt) || Primitives.Void;
    }
    this.currentScope = prev;
    return lastType;
  }

  visitExpressionStatement(ctx) {
      return this.visit(ctx.expression());
  }

  visitIfStatement(ctx) {
      const cond = this.visit(ctx.expression());
      assertAssignable(Primitives.Boolean, cond, "If condition must be Boolean");
      this.visit(ctx.statement(0));
      if (ctx.ELSE()) this.visit(ctx.statement(1));
  }

  visitWhileStatement(ctx) {
      const cond = this.visit(ctx.expression());
      this.visit(ctx.statement());
  }

  visitForStatement(ctx) {
      const prev = this.currentScope;
      this.currentScope = new Scope(prev);
      if (ctx.varDecl()) this.visit(ctx.varDecl());
      else if (ctx.expressionStatement()) this.visit(ctx.expressionStatement());

      if (ctx.expression(0)) this.visit(ctx.expression(0)); // condition
      if (ctx.expression(1)) this.visit(ctx.expression(1)); // post

      this.visit(ctx.statement());
      this.currentScope = prev;
  }

  visitUnlessStmt(ctx) {
      this.visit(ctx.expression());
      this.visit(ctx.statement());
  }

  visitRepeatStmt(ctx) {
      const count = this.visit(ctx.expression());
      assertAssignable(Primitives.Number, count, "Repeat count must be Number");
      this.visit(ctx.statement());
  }

  visitForeverStmt(ctx) {
      this.visit(ctx.statement());
  }

  visitDeferStmt(ctx) {
      this.visit(ctx.statement());
  }

  visitQueueStmt(ctx) {
      this.visit(ctx.statement());
  }

  visitFailStmt(ctx) {
      this.visit(ctx.expression());
  }

  visitJsBlock(ctx) {
      // Nothing to check inside js block
  }

  visitTryStatement(ctx) {
      this.visit(ctx.block(0)); // try
      if (ctx.CATCH()) {
          const prev = this.currentScope;
          this.currentScope = new Scope(prev);
          if (ctx.Identifier()) {
              this.currentScope.define(ctx.Identifier().getText(), { kind: "variable", type: Primitives.Any });
          }
          this.visit(ctx.block(1));
          this.currentScope = prev;
      }
      if (ctx.FINALLY()) this.visit(ctx.block(2));
  }

  visitClassDecl(ctx) {
      const name = ctx.Identifier(0).getText();
      const type = this.currentScope.resolveType(name);

      const prevClass = this.currentClass;
      this.currentClass = type;
      const prevScope = this.currentScope;
      this.currentScope = new Scope(prevScope);

      // Add methods to scope for this class analysis
      for (const [mname, mtype] of Object.entries(type.methods)) {
          this.currentScope.define(mname, { kind: "method", type: mtype });
      }
      for (const [fname, ftype] of Object.entries(type.fields)) {
          this.currentScope.define(fname, { kind: "field", type: ftype });
      }

      for (const el of ctx.classElement()) {
          if (el.constructor.name === "ClassMethodContext") {
              this.visit(el);
          }
          // Fields are already in scope and don't need separate visiting
          // (unless they have initializers, but grammar for classField is just varDecl)
      }

      this.currentScope = prevScope;
      this.currentClass = prevClass;
  }

  visitTypeAlias(ctx) {
      const name = ctx.Identifier().getText();
      const type = this.resolveType(ctx.type());
      // If not already defined (though collectDeclarations should have done it)
      if (!this.currentScope.resolveType(name)) {
          this.currentScope.defineType(name, type);
      }
  }

  visitClassMethod(ctx) {
      const mname = ctx.Identifier().getText();
      const mtype = this.currentClass.methods[mname];

      const prevScope = this.currentScope;
      this.currentScope = new Scope(prevScope);
      this.currentFunctionReturnType = mtype.returnType;

      for (const p of mtype.params) {
          this.currentScope.define(p.name, { kind: "variable", type: p.type });
      }

      this.visit(ctx.block());

      this.currentFunctionReturnType = null;
      this.currentScope = prevScope;
  }
}
