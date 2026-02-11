#!/usr/bin/env bun

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import antlr4 from "antlr4";
import { spawnSync } from "node:child_process";

import ZScriptLexer from "./ZScriptLexer.js";
import ZScriptParser from "./ZScriptParser.js";
import ZTranspiler from "./transpiler.js";

import { ProjectScanner } from "./crawler.js";
import { SemanticAnalyzer } from "./semantic/SemanticAnalyzer.js";
import { Scope } from "./semantic/Scope.js";
import { processComptime } from "./comptime.js";

/* =========================
   METADATA
========================= */

const VERSION = "0.4.1";

/* =========================
   CLI ARG PARSING (SAFE)
========================= */

const argv = Bun.argv.slice(2);
const command = argv[0];
const args = argv.slice(1);

// Detect Flags
const generateHeader = args.some(a => a === "--DHeader=true");

/* =========================
   HELP / VERSION
========================= */

function printHelp() {
  console.log(`
-----------------------------------------
 zsc - ZScript Compiler
-----------------------------------------

Usage:
  zsc build <entry.zs> [--DHeader=true]
  zsc run   <entry.zs> [-- args...]

Bun proxy:
  zsc bun <args...>      Full Bun CLI (embedded)

Options:
  -h, --help        Show this help
  -v, --version     Show compiler version
  --DHeader=true    Generate .zh header files

Examples:
  zsc build main.zs --DHeader=true
  zsc run main.zs -- hello 123
`.trim());
}

function printVersion() {
  console.log(`zsc version ${VERSION}`);
}

/* =========================
   GLOBAL FLAGS
========================= */

if (!command || command === "-h" || command === "--help") {
  printHelp();
  process.exit(0);
}

if (command === "-v" || command === "--version") {
  printVersion();
  process.exit(0);
}

/* =========================
   FULL BUN CLI PROXY
========================= */

if (command === "bun") {
  const result = spawnSync(
    process.execPath,        // embedded Bun
    args,
    {
      stdio: "inherit",
      env: {
        ...process.env,
        BUN_BE_BUN: "1",     // act exactly like bun
      },
    }
  );

  process.exit(result.status ?? 0);
}

/* =========================
   VALIDATE COMMAND
========================= */

if (command !== "build" && command !== "run") {
  console.error(`error: unknown command '${command}'`);
  printHelp();
  process.exit(1);
}

/* =========================
   ARGUMENT PARSING
========================= */

const entryFile = args.find(a => !a.startsWith("-"));
if (!entryFile) {
  console.error("error: no entry file specified");
  process.exit(1);
}

const runArgsIndex = args.indexOf("--");
const runArgs =
  runArgsIndex !== -1 ? args.slice(runArgsIndex + 1) : [];

const entryAbs = path.resolve(entryFile);
const projectRoot = path.dirname(entryAbs);

/* =========================
   PARSE HELPER
========================= */

async function parse(file) {
  let src = readFileSync(file, "utf-8");
  src = await processComptime(src, file);
  const input = new antlr4.InputStream(src);
  const lexer = new ZScriptLexer(input);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ZScriptParser(tokens);
  return { tree: parser.program(), tokens, source: src };
}

/* =========================
   HEADER GENERATOR
========================= */

function generateZH(file, analyzer, tokens) {
    const exports = [];
    const tree = analyzer.modules.get(file).tree;
    
    for (const stmt of tree.statement()) {
        let decl = stmt.getChild(0);
        let isExported = false;
        if (decl.constructor.name === "ExportStmtContext") {
            decl = decl.getChild(1);
            isExported = true;
        }

        const modifier = analyzer.getModifier(decl);
        if (modifier === "public" || isExported) {
            const summary = extractSummary(decl, tokens);
            const info = extractDeclInfo(decl, analyzer);
            if (info) {
                exports.push({ ...info, summary });
            }
        }
    }
    return JSON.stringify({ file, exports }, null, 2);
}

function extractSummary(ctx, tokens) {
    // Look for DOC_COMMENT before the node
    const stopIdx = ctx.start.tokenIndex;
    const hidden = tokens.getHiddenTokensToLeft(stopIdx, antlr4.Lexer.HIDDEN);
    if (!hidden) return "";

    return hidden
        .filter(t => t.text.startsWith("///"))
        .map(t => t.text.replace(/^\/\/\/\s*/, "").trim())
        .join("\n");
}

function extractDeclInfo(ctx, analyzer) {
    let name = null;
    if (typeof ctx.Identifier === 'function') {
        const id = ctx.Identifier(0) || ctx.Identifier();
        if (id && typeof id.getText === 'function') {
            name = id.getText();
        }
    }
    if (!name) return null;

    if (ctx.constructor.name === "FunctionDeclContext") {
        return { kind: "function", name, type: analyzer.currentScope.resolve(name)?.type?.toString() };
    }
    if (ctx.constructor.name === "VarDeclContext") {
        return { kind: "variable", name, type: analyzer.currentScope.resolve(name)?.type?.toString() };
    }
    if (ctx.constructor.name === "StructDeclContext") {
        return { kind: "struct", name };
    }
    if (ctx.constructor.name === "ClassDeclContext") {
        return { kind: "class", name };
    }
    if (ctx.constructor.name === "EnumDeclContext") {
        return { kind: "enum", name };
    }
    if (ctx.constructor.name === "InterfaceDeclContext") {
        return { kind: "interface", name };
    }
    return null;
}

/* =========================
   BUILD CORE
========================= */

async function compileProject(outDir) {
  const scanner = new ProjectScanner();
  await scanner.scan(entryAbs);

  // Copy other files (JS)
  for (const file of scanner.otherFiles) {
    const rel = path.relative(projectRoot, file);
    const outFile = path.join(outDir, rel);
    mkdirSync(path.dirname(outFile), { recursive: true });
    writeFileSync(outFile, readFileSync(file));
    console.log("Copied " + rel + " -> " + path.relative(process.cwd(), outFile));
  }

  // 1. Initialize analyzers for all modules
  const analyzers = new Map();
  for (const file of scanner.modules.keys()) {
    const { tree, tokens, source } = await parse(file);
    // Overwrite tree in scanner module for consistency
    scanner.modules.get(file).tree = tree;
    
    const analyzer = new SemanticAnalyzer(scanner.modules, file, analyzers);
    analyzers.set(file, { analyzer, tree, tokens, source });

    // Setup initial scope and builtins
    analyzer.currentScope = new Scope(null);
    analyzer.injectBuiltins();
  }

  // 2. Collect declarations for all modules
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.collectDeclarations(tree);
  }

  // 3. Inject imports for all modules
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.injectImports(file);
  }

  // 4. Full semantic analysis for all modules
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.visit(tree);
  }

  // 5. Transpilation & Header Generation
  for (const file of scanner.modules.keys()) {
    const { analyzer, tree, tokens, source } = analyzers.get(file);
    const transpiler = new ZTranspiler(tokens, source);
    const output = transpiler.visit(tree);

    const rel = path.relative(projectRoot, file);
    const outFile = path.join(outDir, rel.replace(/\.zs$/, ".js"));

    mkdirSync(path.dirname(outFile), { recursive: true });
    writeFileSync(outFile, output);

    console.log(
      "Compiled " +
        rel +
        " -> " +
        path.relative(process.cwd(), outFile)
    );

    if (generateHeader) {
        const zhContent = generateZH(file, analyzer, tokens);
        const zhFile = outFile.replace(/\.js$/, ".zh");
        writeFileSync(zhFile, zhContent);
        console.log("Header generated: " + path.relative(process.cwd(), zhFile));
    }
  }
}

/* =========================
   COMMANDS
========================= */

try {
  if (command === "build") {
    const outDir = path.join(projectRoot, "bin/js");

    console.log("Building project");
    mkdirSync(outDir, { recursive: true });

    await compileProject(outDir);

    console.log("Build complete");
    process.exit(0);
  }

  if (command === "run") {
    const cacheDir = path.join(projectRoot, ".zsc-cache");

    console.log("Compiling and running project");

    rmSync(cacheDir, { recursive: true, force: true });
    mkdirSync(cacheDir, { recursive: true });

    await compileProject(cacheDir);

    const entryJs = path.join(
      cacheDir,
      path.relative(projectRoot, entryAbs).replace(/\.zs$/, ".js")
    );

    const result = spawnSync(
      process.execPath,      // embedded Bun again
      [entryJs, ...runArgs],
      { stdio: "inherit" }
    );

    process.exit(result.status ?? 0);
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
