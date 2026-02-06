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

/* =========================
   HELP / VERSION
========================= */

function printHelp() {
  console.log(`
-----------------------------------------
 zsc - ZScript Compiler
-----------------------------------------

Usage:
  zsc build <entry.zs>
  zsc run   <entry.zs> [-- args...]

Bun proxy:
  zsc bun <args...>      Full Bun CLI (embedded)

Options:
  -h, --help        Show this help
  -v, --version     Show compiler version

Examples:
  zsc build main.zs
  zsc run main.zs -- hello 123
  zsc bun --help
  zsc bun install
  zsc bun add antlr4
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

const entryFile = args[0];
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

function parse(file) {
  const src = readFileSync(file, "utf-8");
  const input = new antlr4.InputStream(src);
  const lexer = new ZScriptLexer(input);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ZScriptParser(tokens);
  return parser.program();
}

/* =========================
   BUILD CORE
========================= */

function compileProject(outDir) {
  const scanner = new ProjectScanner();
  scanner.scan(entryAbs);

  // 1. Initialize analyzers for all modules
  const analyzers = new Map();
  for (const file of scanner.modules.keys()) {
    const tree = scanner.modules.get(file).tree;
    const analyzer = new SemanticAnalyzer(scanner.modules, file, analyzers);
    analyzers.set(file, { analyzer, tree });

    // Setup initial scope and builtins
    analyzer.currentScope = new Scope(null);
    analyzer.injectBuiltins();
  }

  // 2. Collect declarations for all modules
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.collectDeclarations(tree);
  }

  // 3. Inject imports for all modules (can now find declarations)
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.injectImports(file);
  }

  // 4. Full semantic analysis for all modules
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.visit(tree);
  }

  // 5. Transpilation
  for (const file of scanner.modules.keys()) {
    const tree = scanner.modules.get(file).tree;
    const transpiler = new ZTranspiler();
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

    compileProject(outDir);

    console.log("Build complete");
    process.exit(0);
  }

  if (command === "run") {
    const cacheDir = path.join(projectRoot, ".zsc-cache");

    console.log("Compiling and running project");

    rmSync(cacheDir, { recursive: true, force: true });
    mkdirSync(cacheDir, { recursive: true });

    compileProject(cacheDir);

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
