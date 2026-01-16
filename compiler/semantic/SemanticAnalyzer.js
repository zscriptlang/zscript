import ZScriptVisitor from "../ZScriptVisitor.js";
import { Scope } from "./Scope.js";
import { assertAssignable } from "./TypeSystem.js";

export class SemanticAnalyzer extends ZScriptVisitor {
  constructor(modules, entryFile) {
    super();
    this.modules = modules;
    this.entryFile = entryFile; // absolute path
    this.currentScope = null;
    this.currentFunctionReturnType = null;
  }

  /* =====================
     ERROR HELPER
  ===================== */

  error(ctx, message) {
    const token = ctx?.start;
    const line = token?.line ?? "?";
    const col = token?.column ?? "?";
    return new Error(
      `${this.entryFile}:${line}:${col}\nerror: ${message}`
    );
  }

  /* =====================
     PROGRAM
  ===================== */

  visitProgram(ctx) {
    this.currentScope = new Scope(null);

    this.injectBuiltins();
    this.injectImports(this.entryFile);

    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }
  }

  /* =====================
     BUILTINS
  ===================== */

  injectBuiltins() {
    this.currentScope.define("Number", { kind: "type" });
    this.currentScope.define("String", { kind: "type" });
    this.currentScope.define("Boolean", { kind: "type" });
    this.currentScope.define("Object", { kind: "type" });
    this.currentScope.define("Array", { kind: "type" });

    this.currentScope.define("console", {
      kind: "object",
      methods: {
        log: { params: [{ type: "any" }], returnType: "void" }
      }
    });
  }

  /* =====================
     IMPORTS
  ===================== */

  injectImports(file) {
    const module = this.modules.get(file);
    if (!module) return;

    for (const imported of module.imports) {
      const importedModule = this.modules.get(imported);
      if (!importedModule) continue;

      for (const [name, symbol] of importedModule.exports) {
        this.currentScope.define(name, symbol);
      }
    }
  }

  /* =====================
     DECLARATIONS
  ===================== */

  visitVarDecl(ctx) {
    const name = ctx.Identifier().getText();
    const declaredType = ctx.type()?.getText() ?? "any";
    const valueType = ctx.expression()
      ? this.visit(ctx.expression())
      : "any";

    try {
      assertAssignable(
        declaredType,
        valueType,
        `Invalid assignment to '${name}'`
      );
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
    const returnType = ctx.type()?.getText() ?? "void";

    this.currentScope.define(name, {
      kind: "function",
      returnType,
      params: []
    });

    const fnScope = new Scope(this.currentScope);
    this.currentScope = fnScope;
    this.currentFunctionReturnType = returnType;

    if (ctx.formalParameterList()) {
      for (const p of ctx.formalParameterList().parameter()) {
        const pname = p.Identifier().getText();
        const ptype = p.type()?.getText() ?? "any";
        this.currentScope.define(pname, {
          kind: "variable",
          type: ptype
        });
      }
    }

    this.visit(ctx.block());

    this.currentFunctionReturnType = null;
    this.currentScope = fnScope.parent;
  }

  visitReturnStatement(ctx) {
    const actualType = ctx.expression()
      ? this.visit(ctx.expression())
      : "void";

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

  visitStructDecl(ctx) {
    const name = ctx.Identifier().getText();
    const fields = {};

    for (const f of ctx.structField()) {
      fields[f.Identifier().getText()] = f.type().getText();
    }

    this.currentScope.define(name, {
      kind: "struct",
      fields
    });
  }

  visitEnumDecl(ctx) {
    const ids = ctx.Identifier();
    const name = ids[0].getText();
    const members = ids.slice(1).map(i => i.getText());

    this.currentScope.define(name, {
      kind: "enum",
      members
    });
  }

  visitClassDecl(ctx) {
    const name = ctx.Identifier(0).getText();
    const methods = {};
    const fields = {};

    for (const el of ctx.classElement()) {
      if (el.ClassMethod) {
        const mname = el.Identifier().getText();
        const params = [];

        if (el.formalParameterList()) {
          for (const p of el.formalParameterList().parameter()) {
            params.push({
              name: p.Identifier().getText(),
              type: p.type()?.getText() ?? "any"
            });
          }
        }

        methods[mname] = {
          params,
          returnType: el.type()?.getText() ?? "void"
        };
      }

      if (el.varDecl) {
        fields[el.varDecl().Identifier().getText()] =
          el.varDecl().type()?.getText() ?? "any";
      }
    }

    this.currentScope.define(name, {
      kind: "class",
      methods,
      fields
    });
  }

  /* =====================
     EXPRESSIONS
  ===================== */

  visitIdentifierExpr(ctx) {
    const name = ctx.getText();
    const sym = this.currentScope.resolve(name);
    if (!sym) throw this.error(ctx, `Undefined identifier '${name}'`);
    return sym.type ?? name;
  }

  visitLiteralExpr(ctx) {
    const t = ctx.getText();
    if (t === "true" || t === "false") return "Boolean";
    if (t === "null") return "null";
    if (t.endsWith("n")) return "BigInt";
    if (t.startsWith('"') || t.startsWith("'")) return "String";
    return "Number";
  }

  visitBinaryOp(ctx) {
    const l = this.visit(ctx.expression(0));
    const r = this.visit(ctx.expression(1));
    try {
      assertAssignable(l, r, "Binary operand mismatch");
    } catch (e) {
      throw this.error(ctx, e.message);
    }
    return l;
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
    const sym = this.currentScope.resolve(name);

    if (!sym) throw this.error(ctx, `Unknown constructor '${name}'`);

    if (sym.kind === "struct") {
      const arg = ctx.arguments()?.expression()[0];
      if (!arg || !arg.objectLiteral) {
        throw this.error(ctx, `Struct '${name}' requires object literal`);
      }

      for (const prop of arg.objectLiteral().property()) {
        const field = prop.Identifier().getText();
        const expected = sym.fields[field];
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

      return name;
    }

    if (sym.kind === "class") return name;

    throw this.error(ctx, `'${name}' is not constructible`);
  }

  visitMemberIndex(ctx) {
    const baseName = ctx.expression().getText();
    const member = ctx.Identifier().getText();
    const base = this.currentScope.resolve(baseName);

    if (!base) throw this.error(ctx, `Unknown identifier '${baseName}'`);

    if (base.kind === "enum") {
      if (!base.members.includes(member)) {
        throw this.error(ctx, `Enum '${baseName}' has no member '${member}'`);
      }
      return baseName;
    }

    if (base.kind === "struct") {
      const t = base.fields[member];
      if (!t) throw this.error(ctx, `Struct '${baseName}' has no field '${member}'`);
      return t;
    }

    if (base.kind === "class") {
      if (!base.methods[member]) {
        throw this.error(ctx, `Class '${baseName}' has no method '${member}'`);
      }
      return "function";
    }

    return "any";
  }

  visitCallExpression(ctx) {
    this.visit(ctx.expression());
    if (ctx.arguments()) {
      for (const a of ctx.arguments().expression()) {
        this.visit(a);
      }
    }
    return "any";
  }

  visitArrayAccess(ctx) {
    const base = this.visit(ctx.expression(0));
    const index = this.visit(ctx.expression(1));
    if (index !== "Number") {
      throw this.error(ctx, "Array index must be Number");
    }
    if (base.endsWith("[]")) return base.slice(0, -2);
    return "any";
  }

  visitArrayExpr(ctx) {
    const elements = ctx.arrayLiteral().arguments()?.expression() ?? [];

    if (elements.length === 0) return "any[]";

    const firstType = this.visit(elements[0]);
    for (let i = 1; i < elements.length; i++) {
      const t = this.visit(elements[i]);
      if (t !== firstType) {
        throw this.error(
          elements[i],
          `Array literal elements must have same type (found ${t}, expected ${firstType})`
        );
      }
    }

    return `${firstType}[]`;
  }

  /* =====================
     BLOCKS
  ===================== */

  visitBlock(ctx) {
    const prev = this.currentScope;
    this.currentScope = new Scope(prev);

    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }

    this.currentScope = prev;
  }
}
