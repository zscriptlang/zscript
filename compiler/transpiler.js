import antlr4 from "antlr4";
import ZScriptVisitor from "./ZScriptVisitor.js";

export default class ZTranspiler extends ZScriptVisitor {
  constructor() {
    super();
    this.deferredStacks = [[]];
    this.inClass = false;
  }

  /* =====================
     PROGRAM & BLOCKS
  ===================== */

  visitProgram(ctx) {
    let code = ctx
      .statement()
      .map(s => this.visit(s))
      .filter(Boolean)
      .join("\n");

    const globals = this.deferredStacks.pop().reverse();
    if (globals.length) {
      code += "\n\n// Global defer\n" + globals.join("\n");
    }

    return code;
  }

  visitBlock(ctx) {
    this.deferredStacks.push([]);

    let code = "{\n";
    code += ctx
      .statement()
      .map(s => this.visit(s))
      .filter(Boolean)
      .map(l => "  " + l)
      .join("\n");

    const defers = this.deferredStacks.pop().reverse();
    if (defers.length) {
      code += "\n\n  // Defer cleanup\n  " + defers.join("\n  ");
    }

    code += "\n}";
    return code;
  }

  /* =====================
     DECLARATIONS
  ===================== */

  visitVarDecl(ctx) {
    // IMPORTANT: class fields produce NO JS
    if (this.inClass) return "";

    const kind = ctx.getChild(0).getText(); // let / var / const
    const name = ctx.Identifier().getText();
    const value = ctx.expression()
      ? this.visit(ctx.expression())
      : "undefined";

    return `${kind} ${name} = ${value};`;
  }

  visitFunctionDecl(ctx) {
    const name = ctx.Identifier().getText();
    const params = ctx.formalParameterList()
      ? this.visit(ctx.formalParameterList())
      : "";
    return `function ${name}(${params}) ${this.visit(ctx.block())}`;
  }

  visitStructDecl(ctx) {
    const name = ctx.Identifier(0).getText();
    return `class ${name} {
  constructor(init) {
    Object.assign(this, init);
  }
}`;
  }

  visitEnumDecl(ctx) {
    const ids = ctx.Identifier();
    const name = ids[0].getText();
    const members = ids
      .slice(1)
      .map((id, i) => `${id.getText()}: ${i}`)
      .join(", ");

    return `const ${name} = Object.freeze({ ${members} });`;
  }

  visitClassDecl(ctx) {
    const name = ctx.Identifier(0).getText();
    const base = ctx.EXTENDS()
      ? ` extends ${ctx.Identifier(1).getText()}`
      : "";

    this.inClass = true;

    const body = ctx
      .classElement()
      .map(el => this.visit(el))
      .filter(Boolean)
      .join("\n  ");

    this.inClass = false;

    return `class ${name}${base} {\n  ${body}\n}`;
  }

  visitClassMethod(ctx) {
    const name = ctx.Identifier().getText();
    const params = ctx.formalParameterList()
      ? this.visit(ctx.formalParameterList())
      : "";
    return `${name}(${params}) ${this.visit(ctx.block())}`;
  }

  /* =====================
     EXPRESSIONS
  ===================== */

  visitAssignmentExpr(ctx) {
    return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`;
  }

  visitMemberIndex(ctx) {
    return `${this.visit(ctx.expression(0))}.${ctx.Identifier().getText()}`;
  }

  visitCallExpression(ctx) {
    const fn = this.visit(ctx.expression());
    const args = ctx.arguments() ? this.visit(ctx.arguments()) : "";
    return `${fn}(${args})`;
  }

  visitNewExpression(ctx) {
    const target = this.visit(ctx.expression());
    const args = ctx.arguments() ? this.visit(ctx.arguments()) : "";
    return `new ${target}(${args})`;
  }

  visitBinaryOp(ctx) {
    return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`;
  }

  visitCompareOp(ctx) {
    return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`;
  }

  visitLogicalOp(ctx) {
    return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`;
  }

  visitUnaryOp(ctx) {
    return `!${this.visit(ctx.expression())}`;
  }

  /* =====================
     LITERALS & HELPERS
  ===================== */

  visitObjectLiteral(ctx) {
    return `{ ${ctx.property().map(p => this.visit(p)).join(", ")} }`;
  }

  visitProperty(ctx) {
    return `${ctx.Identifier().getText()}: ${this.visit(ctx.expression())}`;
  }

  visitArrayExpr(ctx) {
    const args = ctx.arrayLiteral().arguments();
    return `[${args ? this.visit(args) : ""}]`;
  }
  
  visitArrayAccess(ctx) {
  const base = this.visit(ctx.expression(0));
  const index = this.visit(ctx.expression(1));
  return `${base}[${index}]`;
 }


  visitIdentifierExpr(ctx) { return ctx.getText(); }
  visitLiteralExpr(ctx) { return ctx.getText(); }
  visitThisExpr(ctx) { return "this"; }
  visitParenthesizedExpr(ctx) { return `(${this.visit(ctx.expression())})`; }
  visitExpressionStatement(ctx) { return this.visit(ctx.expression()) + ";"; }

  visitFormalParameterList(ctx) {
    return ctx.parameter().map(p => this.visit(p)).join(", ");
  }

  visitParameter(ctx) {
    const name = ctx.Identifier().getText();
    return ctx.expression()
      ? `${name} = ${this.visit(ctx.expression())}`
      : name;
  }

  visitArguments(ctx) {
    return ctx.expression().map(e => this.visit(e)).join(", ");
  }

  /* =====================
     CONTROL FLOW
  ===================== */

  visitDeferStmt(ctx) {
    this.deferredStacks[this.deferredStacks.length - 1]
      .push(this.visit(ctx.statement()));
    return null;
  }

  visitIfStatement(ctx) {
    let code = `if (${this.visit(ctx.expression())}) ${this.visit(ctx.statement(0))}`;
    if (ctx.ELSE()) code += ` else ${this.visit(ctx.statement(1))}`;
    return code;
  }

  visitWhileStatement(ctx) {
    return `while (${this.visit(ctx.expression())}) ${this.visit(ctx.statement())}`;
  }

  visitForStatement(ctx) {
    const init = ctx.getChild(2) instanceof antlr4.tree.TerminalNode
      ? ""
      : this.visit(ctx.getChild(2));
    const cond = ctx.expression(0) ? this.visit(ctx.expression(0)) : "";
    const post = ctx.expression(1) ? this.visit(ctx.expression(1)) : "";
    return `for (${init} ${cond}; ${post}) ${this.visit(ctx.statement())}`;
  }

  visitTryStatement(ctx) {
    let code = `try ${this.visit(ctx.block(0))} catch`;
    if (ctx.Identifier()) code += ` (${ctx.Identifier().getText()})`;
    code += ` ${this.visit(ctx.block(1))}`;
    if (ctx.FINALLY()) code += ` finally ${this.visit(ctx.block(2))}`;
    return code;
  }

  visitReturnStatement(ctx) {
    return "return" + (ctx.expression() ? " " + this.visit(ctx.expression()) : "") + ";";
  }

  /* =====================
     MODULES
===================== */

visitImportStmt(ctx) {
  // Get raw string literal value
  const raw = ctx.StringLiteral().getText();
  let importPath = raw.slice(1, -1); // remove quotes

  // Only rewrite ZScript source imports
  if (!importPath.endsWith(".zs")) {
    return ctx.getText();
  }

  // Convert to .js
  importPath = importPath.replace(/\.zs$/, ".js");

  // Force relative path
  if (
    !importPath.startsWith("./") &&
    !importPath.startsWith("../")
  ) {
    importPath = "./" + importPath;
  }

  // Rebuild import statement safely
  if (ctx.importItems()) {
    return `import { ${ctx.importItems().getText()} } from "${importPath}";`;
  }

  return `import ${ctx.Identifier().getText()} from "${importPath}";`;
}


visitExportStmt(ctx) {
  return `export ${this.visit(ctx.getChild(1))}`;
}

}