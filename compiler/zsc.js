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

/* =========================
   METADATA
========================= */

const VERSION = "0.3.4";

/* =========================
   CLI
========================= */

// IMPORTANT: slice(1), NOT slice(2)
const argv = process.argv.slice(1);
const command = argv[0];

function printHelp() {
  console.log(`
-----------------------------------------
 zsc - ZScript Compiler
-----------------------------------------

Usage:
  zsc build <entry.zs>
  zsc run   <entry.zs> [-- args...]

Options:
  -h, --help        Show this help
  -v, --version     Show compiler version

Commands:
  build   Compile project into ./bin/js
  run     Compile project into ./.zsc-cache and run it

Examples:
  zsc build main.zs
  zsc run main.zs
  zsc run src/main.zs -- hello 123
`.trim());
}

function printVersion() {
  console.log(`zsc version ${VERSION}`);
}

/* Global flags */
if (!command || command === "-h" || command === "--help") {
  printHelp();
  process.exit(0);
}

if (command === "-v" || command === "--version") {
  printVersion();
  process.exit(0);
}

if (command !== "build" && command !== "run") {
  console.error(`error: unknown command '${command}'`);
  printHelp();
  process.exit(1);
}

/* =========================
   ARGUMENT PARSING
========================= */

const entryFile = argv[1];
if (!entryFile) {
  console.error("error: no entry file specified");
  process.exit(1);
}

const runArgsIndex = argv.indexOf("--");
const runArgs =
  runArgsIndex !== -1 ? argv.slice(runArgsIndex + 1) : [];

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

  const semanticTree = parse(entryAbs);
  const semantic = new SemanticAnalyzer(scanner.modules, entryAbs);
  semantic.visit(semanticTree);

  for (const file of scanner.modules.keys()) {
    const tree = parse(file);
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
      "bun",
      [entryJs, ...runArgs],
      { stdio: "inherit" }
    );

    process.exit(result.status ?? 0);
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
