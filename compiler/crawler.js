import { readFileSync } from "node:fs";
import path from "node:path";
import antlr4 from "antlr4";
import ZScriptLexer from "./ZScriptLexer.js";
import ZScriptParser from "./ZScriptParser.js";
import ZScriptVisitor from "./ZScriptVisitor.js";
import { processComptime } from "./comptime.js";

/* =========================
   TYPE COLLECTOR
========================= */

class TypeCollector extends ZScriptVisitor {
  constructor() {
    super();
    this.exports = new Map(); // name -> symbol
  }

  /* ---------- STRUCT ---------- */

  visitStructDecl(ctx) {
    const name = ctx.Identifier().getText();
    const fields = {};

    for (const field of ctx.structField()) {
      const fieldName = field.Identifier().getText();
      fields[fieldName] = field.type(); // Store the type context
    }

    this.exports.set(name, {
      kind: "struct",
      name,
      fields,
      ctx
    });

    return null;
  }

  /* ---------- ENUM ---------- */

  visitEnumDecl(ctx) {
    const ids = ctx.Identifier();
    const name = ids[0].getText();
    const members = ids.slice(1).map(id => id.getText());

    this.exports.set(name, {
      kind: "enum",
      name,
      members,
      ctx
    });

    return null;
  }

  /* ---------- FUNCTION ---------- */

  visitFunctionDecl(ctx) {
    const name = ctx.Identifier().getText();

    const params = [];
    if (ctx.formalParameterList()) {
      for (const p of ctx.formalParameterList().parameter()) {
        params.push({
          name: p.Identifier().getText(),
          typeNode: p.type()
        });
      }
    }

    const returnTypeNode = ctx.type();

    this.exports.set(name, {
      kind: "function",
      name,
      params,
      returnTypeNode,
      ctx
    });

    return null;
  }

  /* ---------- CLASS ---------- */

  visitClassDecl(ctx) {
    const name = ctx.Identifier(0).getText();
    const methods = {};
    const fields = {};
    const baseClassName = ctx.EXTENDS() ? ctx.Identifier(1).getText() : null;

    for (const el of ctx.classElement()) {
      // Method
      if (el.ClassMethod) {
        const methodName = el.Identifier().getText();
        const params = [];

        if (el.formalParameterList()) {
          for (const p of el.formalParameterList().parameter()) {
            params.push({
              name: p.Identifier().getText(),
              typeNode: p.type()
            });
          }
        }

        const returnTypeNode = el.type();

        methods[methodName] = {
          params,
          returnTypeNode,
          ctx: el
        };
      }

      // Field
      if (el.varDecl) {
        const fieldName = el.varDecl().Identifier().getText();
        fields[fieldName] = el.varDecl().type(); // type node
      }
    }

    this.exports.set(name, {
      kind: "class",
      name,
      baseClassName,
      methods,
      fields,
      ctx
    });

    return null;
  }

  /* ---------- INTERFACE ---------- */
  visitInterfaceDecl(ctx) {
      const name = ctx.Identifier().getText();
      const fields = {};
      const methods = {}; // Actually grammar doesn't distinguish methods and fields in interface yet?
      // interfaceField : Identifier COLON type SemiColon ;
      
      for (const f of ctx.interfaceField()) {
          fields[f.Identifier().getText()] = f.type();
      }
      
      this.exports.set(name, {
          kind: "interface",
          name,
          fields,
          methods,
          ctx
      });
      return null;
  }

  /* ---------- EXPORT ---------- */

  visitExportStmt(ctx) {
    return this.visit(ctx.getChild(1));
  }
}

/* =========================
   PROJECT SCANNER
========================= */

export class ProjectScanner {
  constructor() {
    this.modules = new Map(); // absPath -> { exports, imports, tree }
    this.otherFiles = new Set(); // absPaths of .js files etc
  }

  async scan(entryFile) {
    const absPath = path.resolve(entryFile);
    if (this.modules.has(absPath)) return;

    let source = readFileSync(absPath, "utf-8");
    source = await processComptime(source, absPath);
    const chars = new antlr4.InputStream(source);
    const lexer = new ZScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ZScriptParser(tokens);
    const tree = parser.program();

    const collector = new TypeCollector();
    collector.visit(tree);

    const imports = [];

    for (const stmt of tree.statement()) {
      const imp = stmt.importStmt?.();
      if (!imp) continue;

      const importPath = imp.StringLiteral().getText().slice(1, -1);
      
      // Handle special API imports
      if (importPath.startsWith("bun::") || importPath.startsWith("node::")) {
        imports.push({
          path: importPath,
          ctx: imp,
          isAPI: true
        });
        continue;
      }

      // Handle JS files
      if (importPath.endsWith(".js")) {
        const resolved = path.resolve(path.dirname(absPath), importPath);
        this.otherFiles.add(resolved);
        imports.push({
          path: resolved,
          ctx: imp,
          isJS: true
        });
        continue;
      }

      const resolved = path.resolve(
        path.dirname(absPath),
        importPath.endsWith(".zs") ? importPath : importPath + ".zs"
      );

      imports.push({
          path: resolved,
          ctx: imp
      });
      await this.scan(resolved);
    }

    this.modules.set(absPath, {
      exports: collector.exports,
      imports,
      tree
    });
  }
}
