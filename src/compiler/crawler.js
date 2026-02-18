import { readFileSync, existsSync } from "node:fs";
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
    this._exporting = false;
  }

  isExported(ctx) {
      if (this._exporting) return true;
      if (ctx.EXPORT && typeof ctx.EXPORT === 'function' && ctx.EXPORT()) return true;
      if (ctx.parentCtx && ctx.parentCtx.constructor.name.includes("ExportStmt")) return true;
      return false;
  }

  /* ---------- STRUCT ---------- */

  visitStructDecl(ctx) {
    if (!this.isExported(ctx) || !ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return null;
    const name = ctx.anyIdentifier().getText();
    const fields = {};

    for (const field of ctx.structField()) {
      if (field.anyIdentifier && typeof field.anyIdentifier === 'function') {
        const fieldName = field.anyIdentifier().getText();
        fields[fieldName] = field.type(); 
      }
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
    if (!this.isExported(ctx) || !ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return null;
    const name = ctx.anyIdentifier().getText();
    const members = ctx.enumMember().map(m => (m.anyIdentifier && typeof m.anyIdentifier === 'function') ? m.anyIdentifier().getText() : "").filter(Boolean);

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
    if (!this.isExported(ctx) || !ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return null;
    const name = ctx.anyIdentifier().getText();

    const params = [];
    if (ctx.formalParameterList()) {
      for (const p of ctx.formalParameterList().parameter()) {
        params.push({
          pattern: p.bindingPattern(),
          typeNode: p.type(),
          isRest: !!p.ELLIPSIS()
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

  /* ---------- MACRO ---------- */
  visitMacroDecl(ctx) {
      const isExported = this.isExported(ctx);
      if (!ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return null;
      const name = ctx.anyIdentifier().getText();
      const params = [];
      if (ctx.formalParameterList()) {
          for (const p of ctx.formalParameterList().parameter()) {
              params.push({
                  pattern: p.bindingPattern(),
                  isRest: !!p.ELLIPSIS()
              });
          }
      }

      this.exports.set(name, {
          kind: "macro",
          name,
          params,
          ctx,
          isExported
      });
      return null;
  }

  /* ---------- CLASS ---------- */

  visitClassDecl(ctx) {
    if (!this.isExported(ctx)) return null;
    const name = ctx.anyIdentifier(0).getText();
    const methods = {};
    const fields = {};
    const baseClassName = ctx.EXTENDS && ctx.EXTENDS() ? ctx.anyIdentifier(1).getText() : null;

    for (const el of ctx.classElement()) {
      const elTypeName = el.constructor.name;
      if (el.anyIdentifier && typeof el.anyIdentifier === 'function') {
        const methodName = el.anyIdentifier().getText();
        const params = [];
        if (el.formalParameterList()) {
          for (const p of el.formalParameterList().parameter()) {
            params.push({
              pattern: p.bindingPattern(),
              typeNode: p.type(),
              isRest: !!p.ELLIPSIS()
            });
          }
        }
        const returnTypeNode = el.type();
        methods[methodName] = { params, returnTypeNode, ctx: el };
      }
      if (elTypeName === "ClassFieldContext") {
        const vdc = el.varDeclContent();
        const fieldName = vdc.bindingPattern().getText();
        fields[fieldName] = vdc.type(); 
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
      if (!this.isExported(ctx) || !ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return null;
      const name = ctx.anyIdentifier().getText();
      const fields = {};
      const methods = {};
      for (const f of ctx.interfaceField()) {
          if (f.anyIdentifier && typeof f.anyIdentifier === 'function') {
              fields[f.anyIdentifier().getText()] = f.type();
          }
      }
      this.exports.set(name, { kind: "interface", name, fields, methods, ctx });
      return null;
  }

  /* ---------- TYPE ALIAS ---------- */
  visitTypeAlias(ctx) {
      if (!this.isExported(ctx) || !ctx.anyIdentifier || typeof ctx.anyIdentifier !== 'function') return null;
      const name = ctx.anyIdentifier().getText();
      this.exports.set(name, { kind: "type", name, ctx });
      return null;
  }

  /* ---------- VAR DECL ---------- */
  visitVarDecl(ctx) {
      if (!this.isExported(ctx)) return null;
      const vdc = ctx.varDeclContent();
      const pattern = vdc.bindingPattern();
      const names = this.extractNames(pattern);
      for (const name of names) {
          this.exports.set(name, { kind: "variable", name, ctx });
      }
      return null;
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

  visitExportStmt(ctx) {
    this._exporting = true;
    const res = this.visit(ctx.getChild(1));
    this._exporting = false;
    return res;
  }
}

/* =========================
   PROJECT SCANNER
======================== */

export class ProjectScanner {
  constructor(projectRoot = process.cwd()) {
    this.modules = new Map(); // absPath -> { exports, imports, tree, source, tokens, isSource }
    this.otherFiles = new Set();
    this.projectRoot = projectRoot;
  }

  async scan(entryFile) {
    const absPath = path.resolve(entryFile);
    if (this.modules.has(absPath)) return;

    if (!existsSync(absPath)) {
        // If it's a Tier 3 import, it might not exist as a file on disk if it's a node module
        // But scan is usually called on .zs files.
        throw new Error(`File not found: ${absPath}`);
    }

    let source = readFileSync(absPath, "utf-8");
    if (!source || source.trim() === "") {
        this.modules.set(absPath, { tree: null, tokens: null, source: "", exports: new Map(), imports: [], isSource: true });
        return;
    }
    const isHeader = absPath.endsWith(".dh");

    const chars = new antlr4.InputStream(source);
    const lexer = new ZScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ZScriptParser(tokens);
    const tree = parser.program();

    this.modules.set(absPath, {
      tree,
      tokens,
      source,
      isSource: true // Default to true for project files
    });

    const imports = [];
    for (const stmt of tree.statement()) {
      const imp = stmt.importStmt?.() || stmt.exportStmt?.();
      if (!imp) continue;
      if (!imp.StringLiteral || !imp.StringLiteral()) continue;
      const importPath = imp.StringLiteral().getText().slice(1, -1);
      
      if (importPath.startsWith("bun::") || importPath.startsWith("node::")) {
        imports.push({ path: importPath, ctx: imp, isAPI: true });
        continue;
      }

      const isRelative = importPath.startsWith("./") || importPath.startsWith("../");
      
      if (isRelative) {
          // Tier 1: Local files
          if (importPath.endsWith(".js")) {
              const resolved = path.resolve(path.dirname(absPath), importPath);
              this.otherFiles.add(resolved);
              imports.push({ path: resolved, ctx: imp, isJS: true });
          } else {
              const resolved = path.resolve(path.dirname(absPath), importPath.endsWith(".zs") ? importPath : importPath + ".zs");
              imports.push({ path: resolved, ctx: imp });
              await this.scan(resolved);
          }
      } else {
          // Bare specifier
          // Try Tier 2: zsc_modules
          const modDir = path.resolve(this.projectRoot, "zsc_modules", importPath);
          const dhPath = path.resolve(modDir, importPath + ".dh");
          const zsPath = path.resolve(modDir, importPath + ".zs");
          const zspPath = path.resolve(modDir, "zsp.json");

          let isSourceLib = false;
          if (existsSync(zspPath)) {
              try {
                  const meta = JSON.parse(readFileSync(zspPath, "utf-8"));
                  isSourceLib = !!meta.source;
              } catch(e) {}
          }
          
          if (isSourceLib && existsSync(zsPath)) {
              imports.push({ path: zsPath, ctx: imp });
              await this.scan(zsPath);
              if (this.modules.has(zsPath)) this.modules.get(zsPath).isSource = true;
          } else if (existsSync(dhPath)) {
              imports.push({ path: dhPath, ctx: imp });
              // Also find the .js file for this library
              const jsLibPath = dhPath.replace(/\.dh$/, ".js");
              if (existsSync(jsLibPath)) this.otherFiles.add(jsLibPath);
              await this.scan(dhPath);
              if (this.modules.has(dhPath)) this.modules.get(dhPath).isSource = false;
              // If .zs exists, scan it too for macro implementations
              if (existsSync(zsPath)) {
                  await this.scan(zsPath);
                  if (this.modules.has(zsPath)) this.modules.get(zsPath).isSource = false;
              }
          } else if (existsSync(zsPath)) {
              imports.push({ path: zsPath, ctx: imp });
              const jsLibPath = zsPath.replace(/\.zs$/, ".js");
              if (existsSync(jsLibPath)) this.otherFiles.add(jsLibPath);
              await this.scan(zsPath);
              if (this.modules.has(zsPath)) this.modules.get(zsPath).isSource = false;
          } else {
              // Tier 3: JS ecosystem / npm
              imports.push({ path: importPath, ctx: imp, isJS: true });
          }
      }
    }
    
    this.modules.get(absPath).imports = imports;
  }

  updateModuleInfo(absPath, source) {
      const chars = new antlr4.InputStream(source);
      const lexer = new ZScriptLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new ZScriptParser(tokens);
      const tree = parser.program();
      const collector = new TypeCollector();
      collector.visit(tree);
      
      const mod = this.modules.get(absPath);
      mod.source = source;
      mod.tree = tree;
      mod.tokens = tokens;
      mod.exports = collector.exports;

      // Refresh imports to point to new tree nodes
      if (mod.imports && mod.imports.length > 0) {
          const newImports = [];
          const currentImportStmts = [];
          for (const stmt of tree.statement()) {
              const imp = stmt.importStmt?.() || stmt.exportStmt?.();
              if (imp && imp.StringLiteral && imp.StringLiteral()) {
                  currentImportStmts.push(imp);
              }
          }
          
          // Match by path to be safer than just index
          for (const imp of currentImportStmts) {
              const importPath = imp.StringLiteral().getText().slice(1, -1);
              const isRel = importPath.startsWith(".");
              const oldImp = mod.imports.find(oi => {
                  if (oi.isAPI) return oi.path.includes(importPath);
                  const normalizedPath = oi.path.split(path.sep).join("/");
                  const search = isRel ? importPath.replace(/^\.\//, "") : importPath;
                  return normalizedPath.endsWith(search) || normalizedPath.endsWith(search + ".zs") || normalizedPath.endsWith(search + ".dh");
              });
              if (oldImp) {
                  newImports.push({ ...oldImp, ctx: imp });
              }
          }
          mod.imports = newImports;
      }
  }
}
