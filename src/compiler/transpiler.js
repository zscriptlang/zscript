import antlr4 from "antlr4";
import ZScriptVisitor from "./ZScriptVisitor.js";
import path from "node:path";
import { existsSync } from "node:fs";

export default class ZTranspiler extends ZScriptVisitor {
  constructor(tokens = null, source = null) {
    super();
    this.tokens = tokens;
    this.source = source;
    this.deferredStacks = [[]];
    this.inClass = false;
    this.modulePath = null;
    this.projectModules = null;
    this.projectRoot = process.cwd();
  }

  /* =====================
     PROGRAM & BLOCKS
  ===================== */

  visitStatement(ctx) {
    let code = "";
    for (let i = 0; i < ctx.getChildCount(); i++) {
        const child = ctx.getChild(i);
        if (child.constructor.name === "VisibilityContext") continue;
        const res = this.visit(child);
        if (res) code += res;
    }
    return code;
  }

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

    const stack = this.deferredStacks.pop();

    const queues = stack.filter(x => x && x.__queue).map(x => x.code);
    const defers = stack.filter(x => !x || !x.__queue).reverse();

    if (queues.length || defers.length) {
      code += "\n\n  // Defer cleanup\n";
      if (queues.length) {
        code += "  " + queues.join("\n  ");
        if (defers.length) code += "\n  ";
      }
      if (defers.length) {
        code += "  " + defers.join("\n  ");
      }
    }

    code += "\n}";
    return code;
  }

  /* =====================
     DECLARATIONS
  ===================== */

  visitTypeAlias(ctx) { return ""; }
  visitInterfaceDecl(ctx) { return ""; }
  visitMacroDecl(ctx) { return ""; }

  isExported(ctx) {
      if (ctx.EXPORT && typeof ctx.EXPORT === 'function' && ctx.EXPORT()) return true;
      if (ctx.parentCtx && ctx.parentCtx.constructor.name.includes("ExportStmt")) return true;
      return false;
  }

  visitVarDecl(ctx) {
    const isExported = this.isExported(ctx);
    const prefix = isExported ? "export " : "";
    const content = this.visitVarDeclContent(ctx.varDeclContent());
    return `${prefix}${content}`;
  }

  visitVarDeclContent(ctx) {
    const kindNode = (ctx.LET && ctx.LET()) || (ctx.VAR && ctx.VAR()) || (ctx.CONST && ctx.CONST());
    if (!kindNode) return "";
    const kind = kindNode.getText();
    const pattern = this.visit(ctx.bindingPattern());
    const value = ctx.expression() ? this.visit(ctx.expression()) : "undefined";

    if (this.inClass) {
        return `${pattern} = ${value};`;
    }

    return `${kind} ${pattern} = ${value};`;
  }

  visitBindingPattern(ctx) {
      if (ctx.anyIdentifier && typeof ctx.anyIdentifier === 'function' && ctx.anyIdentifier()) return ctx.anyIdentifier().getText();
      if (ctx.arrayBindingPattern && ctx.arrayBindingPattern()) return this.visit(ctx.arrayBindingPattern());
      if (ctx.objectBindingPattern && ctx.objectBindingPattern()) return this.visit(ctx.objectBindingPattern());
      return "";
  }

  visitArrayBindingPattern(ctx) {
      const patterns = ctx.bindingPattern().map(p => this.visit(p));
      return `[${patterns.join(", ")}]`;
  }

  visitObjectBindingPattern(ctx) {
      const elements = ctx.objectBindingElement().map(e => this.visit(e));
      return `{ ${elements.join(", ")} }`;
  }

  visitObjectBindingElement(ctx) {
      let id = "";
      if (ctx.anyIdentifier && typeof ctx.anyIdentifier === 'function' && ctx.anyIdentifier()) {
          id = ctx.anyIdentifier().getText();
      } else if (ctx.Identifier && typeof ctx.Identifier === 'function' && ctx.Identifier()) {
          id = ctx.Identifier().getText();
      }
      if (!id) return "";
      const pattern = ctx.bindingPattern() ? this.visit(ctx.bindingPattern()) : null;
      const value = ctx.expression() ? this.visit(ctx.expression()) : null;
      
      let res = id;
      if (pattern) res += `: ${pattern}`;
      if (value) res += ` = ${value}`;
      return res;
  }

  visitFunctionDecl(ctx) {
    const isExported = this.isExported(ctx);
    const prefix = isExported ? "export " : "";
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return "";
    const name = ctx.anyIdentifier().getText();
    
    let isGenerator = false;
    for (let i = 0; i < ctx.getChildCount(); i++) {
        if (ctx.getChild(i).getText() === "*") {
            isGenerator = true;
            break;
        }
    }
    
    const params = ctx.formalParameterList() ? this.visit(ctx.formalParameterList()) : "";
    const isAsync = !!(ctx.ASYNC && ctx.ASYNC());
    const asyncKW = isAsync ? "async " : "";
    return `${prefix}${asyncKW}function${isGenerator ? '*' : ''} ${name}(${params}) ${this.visit(ctx.block())}`;
  }

  visitStructDecl(ctx) {
    const isExported = this.isExported(ctx);
    const prefix = isExported ? "export " : "";
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return "";
    const name = ctx.anyIdentifier(0).getText();
    return `${prefix}class ${name} {
  constructor(init) {
    Object.assign(this, init);
  }
}`;
  }

  visitEnumDecl(ctx) {
    const isExported = this.isExported(ctx);
    const prefix = isExported ? "export " : "";
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return "";
    const name = ctx.anyIdentifier().getText();
    const members = ctx.enumMember().map((m, i) => {
        if (!m.anyIdentifier || typeof m.anyIdentifier !== 'function') return "";
        const id = m.anyIdentifier().getText();
        let val;
        if (m.StringLiteral && m.StringLiteral()) val = m.StringLiteral().getText();
        else if (m.DecimalLiteral && m.DecimalLiteral()) val = m.DecimalLiteral().getText();
        else val = i;
        return `${id}: ${val}`;
    }).join(", ");
    return `${prefix}const ${name} = Object.freeze({ ${members} });`;
  }

  visitClassDecl(ctx) {
    const isExported = this.isExported(ctx);
    const prefix = isExported ? "export " : "";
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return "";
    const name = ctx.anyIdentifier(0).getText();
    const base = ctx.EXTENDS && ctx.EXTENDS() ? ` extends ${ctx.anyIdentifier(1).getText()}` : "";

    this.inClass = true;
    const body = ctx.classElement().map(el => this.visit(el)).filter(Boolean).join("\n  ");
    this.inClass = false;

    return `${prefix}class ${name}${base} {\n  ${body}\n}`;
  }

  visitClassMethod(ctx) {
    const visibility = (ctx.visibility && ctx.visibility()) ? ctx.visibility().getText() : "private";
    const isStatic = !!(ctx.STATIC && ctx.STATIC());
    const staticKW = isStatic ? "static " : "";
    const isGet = !!(ctx.GET && ctx.GET());
    const isSet = !!(ctx.SET && ctx.SET());
    const getSetKW = isGet ? "get " : (isSet ? "set " : "");
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return "";
    const name = ctx.anyIdentifier().getText();
    const params = ctx.formalParameterList() ? this.visit(ctx.formalParameterList()) : "";
    const isAsync = !!(ctx.ASYNC && ctx.ASYNC());
    const asyncKW = isAsync ? "async " : "";
    return `${staticKW}${asyncKW}${getSetKW}${name}(${params}) ${this.visit(ctx.block())}`;
  }

  visitClassMethodWithFn(ctx) { return this.visitClassMethod(ctx); }
  visitClassField(ctx) { 
      const visibility = (ctx.parentCtx.visibility && ctx.parentCtx.visibility()) ? ctx.parentCtx.visibility().getText() : "private";
      const isStatic = !!(ctx.STATIC && ctx.STATIC());
      const res = this.visitVarDeclContent(ctx.varDeclContent());
      return isStatic ? "static " + res : res;
  }

  /* =====================
     EXPRESSIONS
  ===================== */

  visitAssignmentExpr(ctx) {
    return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`;
  }

  visitMemberIndex(ctx) {
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return this.visit(ctx.expression(0));
    return `${this.visit(ctx.expression(0))}.${ctx.anyIdentifier().getText()}`;
  }

  visitGenericCallExpression(ctx) { return this.visitCallExpression(ctx); }
  visitMacroCallExpression(ctx) { return ""; } 

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

  visitAwaitExpr(ctx) { return `await ${this.visit(ctx.expression())}`; }
  visitYieldExpr(ctx) {
      let isStar = false;
      for (let i = 0; i < ctx.getChildCount(); i++) {
          if (ctx.getChild(i).getText() === "*") isStar = true;
      }
      const star = isStar ? "*" : "";
      const expr = ctx.expression() ? " " + this.visit(ctx.expression()) : "";
      return `yield${star}${expr}`;
  }
  visitDynamicImportExpr(ctx) { return `import(${this.visit(ctx.expression())})`; }

  visitPipeExpr(ctx) {
    return `${this.visit(ctx.expression(1))}(${this.visit(ctx.expression(0))})`;
  }

  visitTernaryExpr(ctx) {
    return `${this.visit(ctx.expression(0))} ? ${this.visit(ctx.expression(1))} : ${this.visit(ctx.expression(2))}`;
  }

  visitNullishCoalescingExpr(ctx) {
    return `${this.visit(ctx.expression(0))} ?? ${this.visit(ctx.expression(1))}`;
  }

  visitOptionalChainingExpr(ctx) {
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return this.visit(ctx.expression());
    return `${this.visit(ctx.expression())}?.${ctx.anyIdentifier().getText()}`;
  }

  visitLambdaExpr(ctx) {
    const params = (ctx.formalParameterList && typeof ctx.formalParameterList === 'function' && ctx.formalParameterList())
      ? `(${this.visit(ctx.formalParameterList())})`
      : (ctx.anyIdentifier && typeof ctx.anyIdentifier === 'function' && ctx.anyIdentifier()) ? ctx.anyIdentifier().getText() : "()";
    const body = ctx.block() ? this.visit(ctx.block()) : this.visit(ctx.expression());
    return `${params} => ${body}`;
  }

  visitTypeofExpr(ctx) { return `typeof ${this.visit(ctx.expression())}`; }

  visitMatchExpr(ctx) {
    const target = this.visit(ctx.expression());
    const arms = ctx.matchArm().map(arm => {
      const isDefault = !!(arm.DEFAULT && arm.DEFAULT());
      const cond = isDefault ? "default" : `case ${this.visit(arm.expression(0))}`;
      let body;
      if (arm.block()) {
        const statements = arm.block().statement();
        const blockCode = this.visit(arm.block());
        if (statements.length > 0 && statements[statements.length - 1].expressionStatement()) {
            const lastExpr = this.visit(statements[statements.length - 1].expressionStatement().expression());
            body = `(() => {
              ${blockCode.slice(1, -2).trim().split('\n').slice(0, -1).join('\n')}
              return ${lastExpr};
            })()`;
        } else {
            body = `(() => ${blockCode})()`;
        }
      } else {
        body = this.visit(arm.expression(isDefault ? 0 : 1));
      }
      return `${cond}: return ${body};`;
    });
    return `((__val) => {
      switch (__val) {
        ${arms.join("\n        ")}
      }
    })(${target})`;
  }

  visitBinaryOp(ctx) { return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`; }
  visitCompareOp(ctx) { return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`; }
  visitLogicalOp(ctx) { return `${this.visit(ctx.expression(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.expression(1))}`; }
  visitUnaryOp(ctx) { return `!${this.visit(ctx.expression())}`; }

  /* =====================
     LITERALS & HELPERS
  ===================== */

  visitObjectLiteral(ctx) {
    return `{ ${ctx.property().map(p => this.visit(p)).join(", ")} }`;
  }

  visitProperty(ctx) {
    if (ctx.ELLIPSIS && ctx.ELLIPSIS()) return `...${this.visit(ctx.expression())}`;
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return "";
    if (!ctx.expression()) return ctx.anyIdentifier(0).getText(); // shorthand
    return `${ctx.anyIdentifier(0).getText()}: ${this.visit(ctx.expression())}`;
  }

  visitArrayExpr(ctx) {
    const args = ctx.arrayLiteral().arguments();
    return `[${args ? this.visit(args) : ""}]`;
  }
  
  visitArrayAccess(ctx) { return `${this.visit(ctx.expression(0))}[${this.visit(ctx.expression(1))}]`; }
  visitIdentifierExpr(ctx) { return ctx.getText(); }
  visitLiteralExpr(ctx) {
      const lit = ctx.literal();
      if (lit.RegexLiteral && lit.RegexLiteral()) return lit.RegexLiteral().getText();
      return ctx.getText();
  }
  visitThisExpr(ctx) { return "this"; }
  visitParenthesizedExpr(ctx) { return `(${this.visit(ctx.expression())})`; }
  visitExpressionStatement(ctx) { return this.visit(ctx.expression()) + ";"; }

  visitFormalParameterList(ctx) {
    return ctx.parameter().map(p => this.visit(p)).join(", ");
  }

  visitParameter(ctx) {
    const ellipsis = (ctx.ELLIPSIS && ctx.ELLIPSIS()) ? "..." : "";
    const pattern = this.visit(ctx.bindingPattern());
    return ctx.expression() ? `${ellipsis}${pattern} = ${this.visit(ctx.expression())}` : `${ellipsis}${pattern}`;
  }

  visitArguments(ctx) {
    return ctx.children.map(c => {
        if (c instanceof antlr4.tree.TerminalNode) {
            const text = c.getText();
            if (text === ",") return ", ";
            if (text === "...") return "...";
            return "";
        }
        return this.visit(c);
    }).join("");
  }

  /* =====================
     CONTROL FLOW
  ===================== */

  visitDeferStmt(ctx) { this.deferredStacks[this.deferredStacks.length - 1].push(this.visit(ctx.statement())); return null; }
  visitQueueStmt(ctx) { const stmt = this.visit(ctx.statement()); this.deferredStacks[this.deferredStacks.length - 1].push({ __queue: true, code: stmt }); return null; }

  visitJsBlock(ctx) {
    if (this.source) {
        const start = ctx.block().OpenBrace().getSymbol().stop + 1;
        const stop = ctx.block().CloseBrace().getSymbol().start - 1;
        if (start > stop) return "";
        return this.source.slice(start, stop + 1);
    }
    return ctx.block().getText().slice(1, -1);
  }

  visitUnlessStmt(ctx) { return `while (!(${this.visit(ctx.expression())})) ${this.visit(ctx.statement())}`; }
  visitRepeatStmt(ctx) { const count = this.visit(ctx.expression()); const stmt = this.visit(ctx.statement()); return `for (let __i = 0; __i < ${count}; __i++) ${stmt}`; }
  visitForeverStmt(ctx) { return `while (true) ${this.visit(ctx.statement())}`; }
  visitFailStmt(ctx) { return `throw ${this.visit(ctx.expression())};`; }
  visitBreakStmt(ctx) { return "break;"; }
  visitContinueStmt(ctx) { return "continue;"; }
  visitLabeledStatement(ctx) { 
    if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return this.visit(ctx.statement());
    return `${ctx.anyIdentifier().getText()}: ${this.visit(ctx.statement())}`; 
  }
  visitDebuggerStmt(ctx) { return "debugger;"; }
  visitSemiColon(ctx) { return ";"; }

  visitIfStatement(ctx) {
    let code = `if (${this.visit(ctx.expression())}) ${this.visit(ctx.statement(0))}`;
    if (ctx.ELSE && ctx.ELSE()) code += ` else ${this.visit(ctx.statement(1))}`;
    return code;
  }

  visitWhileStatement(ctx) { return `while (${this.visit(ctx.expression())}) ${this.visit(ctx.statement())}`; }

  visitForStatement(ctx) {
    const isAsync = !!(ctx.ASYNC && ctx.ASYNC());
    const asyncKW = isAsync ? "await " : "";

    if ((ctx.IN && ctx.IN()) || (ctx.OF && ctx.OF())) {
      const op = (ctx.IN && ctx.IN()) ? "in" : "of";
      const pattern = this.visit(ctx.bindingPattern());
      const expr = this.visit(ctx.expression(ctx.expression().length - 1));
      let decl = "";
      if (ctx.LET && ctx.LET()) decl = "let ";
      else if (ctx.VAR && ctx.VAR()) decl = "var ";
      else if (ctx.CONST && ctx.CONST()) decl = "const ";
      return `for ${asyncKW}(${decl}${pattern} ${op} ${expr}) ${this.visit(ctx.statement())}`;
    }

    let init = "";
    if (ctx.varDecl && ctx.varDecl()) {
        init = this.visit(ctx.varDecl());
        if (init.endsWith(";")) init = init.slice(0, -1);
    } else if (ctx.expressionStatement && ctx.expressionStatement()) {
        init = this.visit(ctx.expressionStatement().expression());
    }

    const semiColons = ctx.SemiColon ? ctx.SemiColon() : [];
    const expressions = ctx.expression ? ctx.expression() : [];
    let cond = "";
    let post = "";

    if ((ctx.varDecl && ctx.varDecl()) || (ctx.expressionStatement && ctx.expressionStatement())) {
        if (semiColons.length >= 1) {
            const s1 = semiColons[0].symbol.tokenIndex;
            for (const ex of expressions) {
                if (ex.start.tokenIndex < s1) cond = this.visit(ex);
                else post = this.visit(ex);
            }
        }
    } else {
        if (semiColons.length >= 2) {
            const s1 = semiColons[0].symbol.tokenIndex;
            const s2 = semiColons[1].symbol.tokenIndex;
            for (const ex of expressions) {
                const idx = ex.start.tokenIndex;
                if (idx > s1 && idx < s2) cond = this.visit(ex);
                else if (idx > s2) post = this.visit(ex);
            }
        }
    }

    return `for ${asyncKW}(${init}; ${cond}; ${post}) ${this.visit(ctx.statement())}`;
  }

  visitTryStatement(ctx) {
    let code = `try ${this.visit(ctx.block(0))} catch`;
    if (ctx.anyIdentifier && typeof ctx.anyIdentifier === 'function' && ctx.anyIdentifier()) code += ` (${ctx.anyIdentifier().getText()})`;
    code += ` ${this.visit(ctx.block(1))}`;
    if (ctx.FINALLY && ctx.FINALLY()) code += ` finally ${this.visit(ctx.block(2))}`;
    return code;
  }

  visitReturnStatement(ctx) { return "return" + (ctx.expression() ? " " + this.visit(ctx.expression()) : "") + ";"; }

  /* =====================
     MODULES
===================== */

visitImportStmt(ctx) {
  if (ctx.StringLiteral() && !ctx.importItems() && !ctx.Identifier()) {
      return `import ${ctx.StringLiteral().getText()};`;
  }
  const raw = ctx.StringLiteral().getText();
  let importPath = this.remapImportPath(raw.slice(1, -1));

  if (ctx.importItems && ctx.importItems()) {
      let items = ctx.importItems().importItem();
      if (this.projectModules && this.modulePath) {
          const modInfo = this.projectModules.get(this.modulePath);
          if (modInfo && modInfo.imports) {
              const impInfo = modInfo.imports.find(i => i.ctx === ctx || (i.ctx && i.ctx.parentCtx === ctx));
              if (impInfo && impInfo.path) {
                  const targetMod = this.projectModules.get(impInfo.path);
                  if (targetMod) {
                      items = items.filter(item => {
                  if (!item.anyIdentifier || typeof item.anyIdentifier !== 'function') return false;
                          const originalName = item.anyIdentifier(0).getText();
                          const sym = targetMod.exports.get(originalName);
                          return !sym || sym.kind !== "macro";
                      });
                  }
              }
          }
      }
      if (items.length === 0) return "";
      const itemsStr = items.map(it => it.getText()).join(", ");
      return `import { ${itemsStr} } from "${importPath}";`;
  }
  
  const aliasId = (ctx.anyIdentifier && typeof ctx.anyIdentifier === 'function') ? ctx.anyIdentifier() : null;
  if (aliasId) {
      const alias = Array.isArray(aliasId) ? aliasId[aliasId.length - 1].getText() : aliasId.getText();
      // Check if it's a macro-only module? Or just always use * as for Identifier import in ZScript
      return `import * as ${alias} from "${importPath}";`;
  }
  return `import "${importPath}";`;
}

visitExportStmt(ctx) { 
    if (ctx.StringLiteral && ctx.StringLiteral()) {
        const raw = ctx.StringLiteral().getText();
        let importPath = this.remapImportPath(raw.slice(1, -1));
        return `export * from "${importPath}";`;
    }
    return this.visit(ctx.getChild(1)); 
}

remapImportPath(importPath) {
  const isRelative = importPath.startsWith("./") || importPath.startsWith("../");
  const isAPI = importPath.startsWith("bun::") || importPath.startsWith("node::");

  if (isAPI) {
      return importPath.replace(/^bun::/, "bun:").replace(/^node::/, "node:");
  } else if (isRelative) {
      if (importPath.endsWith(".zs")) {
          return importPath.replace(/\.zs$/, ".js");
      } else if (!importPath.endsWith(".js")) {
          return importPath + ".js";
      }
      return importPath;
  } else {
      // Bare specifier
      const modDir = path.resolve(this.projectRoot, "zsc_modules", importPath);
      const zsPath = path.resolve(modDir, importPath + ".zs");
      const dhPath = path.resolve(modDir, importPath + ".dh");

      if (existsSync(modDir) && (existsSync(zsPath) || existsSync(dhPath))) {
          // Remap to relative path in output
          const absTarget = path.resolve(modDir, importPath + ".js");
          const relToProject = path.relative(path.dirname(this.modulePath), absTarget);
          
          // Convert OS-specific relative path to POSIX-style import path
          let posixPath = relToProject.split(path.sep).join("/");
          if (!posixPath.startsWith("./") && !posixPath.startsWith("../")) {
              posixPath = "./" + posixPath;
          }
          return posixPath;
      }
      return importPath;
  }
}

visitComptimeStmt(ctx) { return ""; }
visitComptimeVarDecl(ctx) { return ""; }
}
