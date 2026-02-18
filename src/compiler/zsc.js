#!/usr/bin/env bun

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import path from "node:path";
import antlr4 from "antlr4";
import { spawnSync } from "node:child_process";

import ZScriptLexer from "./ZScriptLexer.js";
import ZScriptParser from "./ZScriptParser.js";
import ZTranspiler from "./transpiler.js";

import { ProjectScanner } from "./crawler.js";
import { SemanticAnalyzer } from "./semantic/SemanticAnalyzer.js";
import { Scope } from "./semantic/Scope.js";
import { MacroExpander } from "./macro.js";

/* =========================
   METADATA
========================= */

const VERSION = "1.0.0";

/* =========================
   CLI ARG PARSING
========================= */

const argv = Bun.argv.slice(2);
const command = argv[0];
const rawArgs = argv.slice(1);

// Simple flag parser
const flags = {};
const args = [];
let skipNext = false;

for (let i = 0; i < rawArgs.length; i++) {
    if (skipNext) { skipNext = false; continue; }
    const arg = rawArgs[i];
    if (arg === "--") {
        args.push(...rawArgs.slice(i));
        break;
    }
    if (arg.startsWith("--")) {
        const parts = arg.slice(2).split("=");
        if (parts.length > 1) {
            flags[parts[0]] = parts[1];
        } else {
            flags[parts[0]] = true;
        }
    } else {
        args.push(arg);
    }
}

/* =========================
   TARGET INFO
========================= */

let targetInfo = {
    target: "host",
    runtime: "bun",
    os: process.platform,
    arch: process.arch,
    libc: "glibc", // Default to glibc
    cpu: "baseline"
};

function parseTarget(targetStr) {
    if (!targetStr || targetStr === "host") return targetInfo;
    const parts = targetStr.split("-");
    const info = { target: targetStr };
    
    // bun-linux-x64-musl-baseline
    if (parts[0]) info.runtime = parts[0];
    if (parts[1]) info.os = parts[1];
    if (parts[2]) info.arch = parts[2];
    
    // Check for libc or cpu in remaining parts
    for (let i = 3; i < parts.length; i++) {
        const p = parts[i];
        if (p === "musl" || p === "glibc") info.libc = p;
        else if (p === "baseline" || p === "modern" || p === "avx2") info.cpu = p;
    }
    
    return { ...targetInfo, ...info };
}

/* =========================
   HELP / VERSION
========================= */

function printHelp() {
  console.log(`
-----------------------------------------
 zsc - ZScript Ultimate Compiler
-----------------------------------------

Usage:
  zsc build   <entry.zs> --target=<target>
  zsc compile <entry.zs> --target=<target>
  zsc run     <entry.zs> [-- args...]
  zsc export  <entry.zs> [--source=true]
  zsc add     <name|package.zsp>
  zsc install
  zsc remove  <name>

Targets (Bun-style):
  bun-linux-x64, bun-windows-x64, bun-darwin-arm64, etc.

Bun proxy:
  zsc bun <args...>      Full Bun CLI (embedded)

Options:
  -h, --help        Show this help
  -v, --version     Show compiler version

Examples:
  zsc build main.zs
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
    process.execPath,
    args,
    {
      stdio: "inherit",
      env: { ...process.env, BUN_BE_BUN: "1" },
    }
  );
  process.exit(result.status ?? 0);
}

/* =========================
   VALIDATE COMMAND
========================= */

if (["build", "run", "export", "add", "remove", "compile", "install"].indexOf(command) === -1) {
  console.error(`error: unknown command '${command}'`);
  printHelp();
  process.exit(1);
}

/* =========================
   ARGUMENT PARSING
========================= */

const entryFile = (command !== "install") ? args.find(a => a && !a.startsWith("-")) : null;
if (!entryFile && command !== "install") {
  console.error("error: no entry file specified");
  process.exit(1);
}

const runArgsIndex = args.indexOf("--");
const runArgs = runArgsIndex !== -1 ? args.slice(runArgsIndex + 1) : [];

const entryAbs = entryFile ? path.resolve(entryFile) : null;
const projectRoot = process.cwd();

if ((command === "build" || command === "compile") && !flags.target) {
    console.error(`error: --target is REQUIRED for '${command}' command`);
    process.exit(1);
}

targetInfo = parseTarget(flags.target || "host");

/* =========================
   HEADER GENERATOR
========================= */

function generateDH(file, analyzer, tokens) {
    let dh = "// ZScript Header File (.dh)\n\n";
    const modInfo = analyzer.modules.get(file);
    if (!modInfo || !modInfo.exports) return "";
    const exports = modInfo.exports;
    
    for (const [name, symbol] of exports) {
        if (symbol.kind === "macro" && !symbol.isExported) continue;
        const ctx = symbol.ctx;
        const summary = extractSummary(ctx, tokens);
        if (summary) dh += `/// ${summary.replace(/\n/g, "\n/// ")}\n`;
        
        if (symbol.kind === "function") {
            const tps = symbol.ctx.typeParameters && symbol.ctx.typeParameters() ? symbol.ctx.typeParameters().getText() : "";
            const params = symbol.params.map(p => {
                const ellipsis = p.isRest ? "..." : "";
                const type = p.typeNode ? `: ${p.typeNode.getText()}` : "";
                const patternText = p.pattern ? p.pattern.getText() : "arg";
                return `${ellipsis}${patternText}${type}`;
            }).join(", ");
            const returnType = symbol.returnTypeNode ? `: ${symbol.returnTypeNode.getText()}` : "";
            dh += `export fn ${name}${tps}(${params})${returnType};\n\n`;
        } else if (symbol.kind === "variable") {
            // Find varDeclContent if ctx is VarDecl
            let vdc = symbol.ctx;
            if (vdc.constructor.name === "VarDeclContext") vdc = vdc.varDeclContent();
            
            const kindNode = (vdc.LET() || vdc.VAR() || vdc.CONST());
            const kind = kindNode ? kindNode.getText() : "let";
            const type = vdc.type() ? `: ${vdc.type().getText()}` : "";
            dh += `export ${kind} ${name}${type};\n\n`;
        } else if (symbol.kind === "struct") {
            dh += `export struct ${name} {\n`;
            for (const [fname, ftype] of Object.entries(symbol.fields)) {
                dh += `    ${fname}: ${ftype.getText()};\n`;
            }
            dh += `}\n\n`;
        } else if (symbol.kind === "enum") {
            dh += `export enum ${name} {\n    ${symbol.members.join(",\n    ")}\n}\n\n`;
        } else if (symbol.kind === "class") {
            const tps = symbol.ctx.typeParameters && symbol.ctx.typeParameters() ? symbol.ctx.typeParameters().getText() : "";
            const base = symbol.baseClassName ? ` extends ${symbol.baseClassName}` : "";
            dh += `export class ${name}${tps}${base} {\n`;
            
            const resolvedClass = analyzer.currentScope.resolveType(name);
            
            for (const [fname, fInfo] of Object.entries(resolvedClass.fields || {})) {
                const typeStr = fInfo.type ? fInfo.type.toString() : "any";
                dh += `    let ${fname}: ${typeStr};\n`;
            }
            for (const [mname, mInfo] of Object.entries(resolvedClass.methods || {})) {
                const m = mInfo.type;
                const mtps = m.typeParams && m.typeParams.length > 0 ? `<${m.typeParams.join(", ")}>` : "";
                const mparams = m.params.map(p => {
                    const ellipsis = p.isVariadic ? "..." : "";
                    return `${ellipsis}${p.name}: ${p.type.toString()}`;
                }).join(", ");
                dh += `    ${mname}${mtps}(${mparams}): ${m.returnType.toString()};\n`;
            }
            dh += `}\n\n`;
        } else if (symbol.kind === "interface") {
            dh += `export interface ${name} {\n`;
            for (const [fname, ftype] of Object.entries(symbol.fields)) {
                dh += `    ${fname}: ${ftype.getText()};\n`;
            }
            dh += `}\n\n`;
        } else if (symbol.kind === "type") {
            dh += `export type ${name} = ${symbol.ctx.type().getText()};\n\n`;
        } else if (symbol.kind === "macro") {
            const mparams = symbol.params.map(p => {
                const ellipsis = p.isRest ? "..." : "";
                const patternText = p.pattern ? p.pattern.getText() : "arg";
                return `${ellipsis}${patternText}`;
            }).join(", ");
            dh += `export macro ${name}(${mparams});\n\n`;
        }
    }
    return dh;
}

function extractSummary(ctx, tokens) {
    if (!tokens) return "";
    const stopIdx = ctx.start.tokenIndex;
    const hidden = tokens.getHiddenTokensToLeft(stopIdx, antlr4.Lexer.HIDDEN);
    if (!hidden) return "";
    return hidden.filter(t => t.text.startsWith("///")).map(t => t.text.replace(/^\/\/\/\s*/, "").trim()).join("\n");
}

/* =========================
   BUILD CORE
========================= */

async function compileProject(entry, outDir) {
  const scanner = new ProjectScanner(projectRoot);
  await scanner.scan(entry);

  // Initial collect declarations for all modules
  for (const [file, module] of scanner.modules) {
      scanner.updateModuleInfo(file, module.source);
  }

  // 1. Macro Expansion & Comptime (Iterative)
  for (const [file, module] of scanner.modules) {
      if (file.endsWith(".dh")) continue; // Skip headers
      
      const expander = new MacroExpander(scanner.modules, file);
      expander.targetInfo = targetInfo;
      try {
          module.source = await expander.expand(module.source);
          // Refresh module info after expansion
          scanner.updateModuleInfo(file, module.source);
      } catch (e) {
          console.error(`Macro expansion failed in ${file}:`, e);
          throw e;
      }
  }

  // 2. Initialize analyzers
  const analyzers = new Map();
  for (const [file, module] of scanner.modules) {
    const analyzer = new SemanticAnalyzer(scanner.modules, file, analyzers);
    analyzer.targetInfo = targetInfo;
    analyzers.set(file, { analyzer, tree: module.tree, tokens: module.tokens, source: module.source });
    analyzer.currentScope = new Scope(null);
    analyzer.injectBuiltins();
  }

  // 3. Collect declarations (again, on final AST)
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.collectDeclarations(tree);
  }

  // 4. Inject imports
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.injectImports(file);
  }

  // 5. Full semantic analysis
  for (const [file, { analyzer, tree }] of analyzers) {
    analyzer.visit(tree);
  }

  // 6. Transpilation & Header Generation
  for (const [file, module] of scanner.modules) {
    if (file.endsWith(".dh")) continue; // Don't transpile headers back to JS
    if (module.isSource === false) continue; // Skip library implementations that are already compiled

    const { analyzer, tree, tokens, source } = analyzers.get(file);
    const transpiler = new ZTranspiler(tokens, source);
    transpiler.modulePath = file;
    transpiler.projectModules = scanner.modules;
    transpiler.projectRoot = projectRoot;
    const output = transpiler.visit(tree);

    const rel = path.relative(projectRoot, file);
    let outFile;
    if (file.endsWith(".zs")) {
        outFile = path.join(outDir, rel.replace(/\.zs$/, ".js"));
    } else {
        outFile = path.join(outDir, rel);
    }

    mkdirSync(path.dirname(outFile), { recursive: true });
    writeFileSync(outFile, output);

    console.log(`Compiled ${rel} -> ${path.relative(process.cwd(), outFile)}`);

    const dhContent = generateDH(file, analyzer, tokens);
    const dhFile = outFile.replace(/\.js$/, ".dh");
    writeFileSync(dhFile, dhContent);
    console.log(`Header generated: ${path.relative(process.cwd(), dhFile)}`);
  }

  // Copy other files
  for (const file of scanner.otherFiles) {
    const rel = path.relative(projectRoot, file);
    const outFile = path.join(outDir, rel);
    mkdirSync(path.dirname(outFile), { recursive: true });
    writeFileSync(outFile, readFileSync(file));
    console.log(`Copied ${rel} -> ${path.relative(process.cwd(), outFile)}`);
  }
}

/* =========================
   PACKAGE MANAGEMENT
========================= */

function checkCommand(cmd) {
    const result = spawnSync("which", [cmd]);
    return result.status === 0;
}

async function exportPackage(libPath) {
    if (!checkCommand("zip")) {
        throw new Error("error: 'zip' command not found. Please install zip to export packages.");
    }
    const libAbs = path.resolve(libPath);
    const libName = path.basename(libAbs, ".zs");
    const outDir = path.dirname(libAbs);
    const zspFile = path.join(outDir, `${libName}.zsp`);
    const isSourceOnly = flags.source === "true" || flags.source === true;
    
    console.log(`Exporting ${libName} to ${zspFile} (source-only: ${isSourceOnly})...`);
    
    const tempOut = path.join(outDir, ".zsc-temp-build");
    rmSync(tempOut, { recursive: true, force: true });
    mkdirSync(tempOut, { recursive: true });
    
    await compileProject(libAbs, tempOut);
    
    // Find generated files
    const relLibPath = path.relative(projectRoot, libAbs);
    const dhFile = path.join(tempOut, relLibPath.replace(/\.zs$/, ".dh"));
    const jsFile = path.join(tempOut, relLibPath.replace(/\.zs$/, ".js"));
    
    const bundleDir = path.join(outDir, `.zsc-bundle-${libName}`);
    rmSync(bundleDir, { recursive: true, force: true });
    mkdirSync(bundleDir, { recursive: true });
    
    writeFileSync(path.join(bundleDir, libName + ".zs"), readFileSync(libAbs));
    if (existsSync(dhFile)) writeFileSync(path.join(bundleDir, libName + ".dh"), readFileSync(dhFile));
    if (!isSourceOnly && existsSync(jsFile)) writeFileSync(path.join(bundleDir, libName + ".js"), readFileSync(jsFile));
    
    const metadata = { 
        name: libName, 
        version: "1.0.0",
        source: isSourceOnly
    };
    writeFileSync(path.join(bundleDir, "zsp.json"), JSON.stringify(metadata, null, 2));
    
    spawnSync(`zip -j "${zspFile}" "${bundleDir}"/*`, { shell: true });
    
    rmSync(bundleDir, { recursive: true, force: true });
    rmSync(tempOut, { recursive: true, force: true });
    
    console.log(`Package exported: ${zspFile}`);
}

async function installLocalZsp(pkgPath, pkgName, modulesDir) {
    const targetDir = path.join(modulesDir, pkgName);
    rmSync(targetDir, { recursive: true, force: true });
    mkdirSync(targetDir, { recursive: true });
    console.log(`Installing ${pkgName}...`);
    spawnSync("unzip", ["-o", pkgPath, "-d", targetDir]);
    console.log(`Installed ${pkgName} to ${targetDir}`);
}

function updatePackageJson(pkgName, versionOrPath, isRemoving = false) {
    const pkgJsonPath = path.join(projectRoot, "package.json");
    let pkgJson = {};
    if (existsSync(pkgJsonPath)) {
        try {
            pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
        } catch(e) {}
    }
    if (!pkgJson.zscriptDependencies) pkgJson.zscriptDependencies = {};
    
    if (isRemoving) {
        delete pkgJson.zscriptDependencies[pkgName];
    } else {
        pkgJson.zscriptDependencies[pkgName] = versionOrPath;
    }
    
    writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
}

async function addPackage(pkgSpec, skipSave = false) {
    if (!checkCommand("unzip")) {
        throw new Error("error: 'unzip' command not found. Please install unzip to add packages.");
    }
    const modulesDir = path.join(projectRoot, "zsc_modules");
    mkdirSync(modulesDir, { recursive: true });
    
    if (pkgSpec.endsWith(".zsp") || existsSync(path.resolve(pkgSpec))) {
        const pkgAbs = path.resolve(pkgSpec);
        const pkgName = path.basename(pkgAbs, ".zsp");
        await installLocalZsp(pkgAbs, pkgName, modulesDir);
        if (!skipSave) updatePackageJson(pkgName, pkgSpec);
    } else {
        const pkgName = pkgSpec;
        console.log(`Searching for package '${pkgName}'...`);
        try {
            const resp = await fetch(`https://pkg.zscript.us.kg/fetch.php?libname=${pkgName}`);
            if (!resp.ok) throw new Error(`Registry returned ${resp.status}`);
            const data = await resp.json();
            const info = data[pkgName];
            if (!info || !info.url) throw new Error(`Package '${pkgName}' not found on registry.`);
            
            console.log(`Downloading ${pkgName} v${info.latest || "latest"}...`);
            const zspResp = await fetch(info.url);
            if (!zspResp.ok) throw new Error(`Failed to download from ${info.url}`);
            const buffer = await zspResp.arrayBuffer();
            const tempZsp = path.join(modulesDir, `${pkgName}.temp.zsp`);
            writeFileSync(tempZsp, Buffer.from(buffer));
            
            await installLocalZsp(tempZsp, pkgName, modulesDir);
            rmSync(tempZsp);
            if (!skipSave) updatePackageJson(pkgName, info.latest || "latest");
        } catch (e) {
            console.error(`error: Could not add package '${pkgName}': ${e.message}`);
            process.exit(1);
        }
    }
}

async function installDependencies() {
    const pkgJsonPath = path.join(projectRoot, "package.json");
    if (!existsSync(pkgJsonPath)) {
        console.log("No package.json found. Nothing to install.");
        return;
    }
    const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
    const deps = pkgJson.zscriptDependencies || {};
    const depNames = Object.keys(deps);
    
    if (depNames.length === 0) {
        console.log("No ZScript dependencies found in package.json.");
        return;
    }
    
    console.log(`Installing ${depNames.length} dependencies...`);
    for (const name of depNames) {
        const spec = deps[name];
        await addPackage(name === spec ? name : (spec.endsWith(".zsp") ? spec : name), true);
    }
    console.log("Installation complete.");
}

/* =========================
   COMMANDS
========================= */

try {
  if (command === "build") {
    const outDir = path.join(projectRoot, "bin/js");
    console.log("Building project...");
    mkdirSync(outDir, { recursive: true });
    await compileProject(entryAbs, outDir);
    console.log("Build complete.");
    process.exit(0);
  }

  if (command === "run") {
    const cacheDir = path.join(projectRoot, ".zsc-cache");
    console.log("Compiling and running project...");
    rmSync(cacheDir, { recursive: true, force: true });
    mkdirSync(cacheDir, { recursive: true });
    await compileProject(entryAbs, cacheDir);
    const entryJs = path.join(cacheDir, path.relative(projectRoot, entryAbs).replace(/\.zs$/, ".js"));
    const result = spawnSync(process.execPath, [entryJs, ...runArgs], { stdio: "inherit" });
    process.exit(result.status ?? 0);
  }

  if (command === "compile") {
      const outDir = path.join(projectRoot, "bin/dist");
      const exeName = path.basename(entryAbs, ".zs");
      const outExe = path.join(projectRoot, "bin", exeName + (targetInfo.os === "windows" ? ".exe" : ""));
      
      console.log(`Compiling ZScript to standalone executable: ${outExe}`);
      console.log(`Target: ${targetInfo.target}`);

      rmSync(outDir, { recursive: true, force: true });
      mkdirSync(outDir, { recursive: true });
      
      await compileProject(entryAbs, outDir);
      
      const entryJs = path.join(outDir, path.relative(projectRoot, entryAbs).replace(/\.zs$/, ".js"));
      
      const compileResult = spawnSync(
          process.execPath,
          ["build", entryJs, "--compile", "--outfile", outExe, "--target", targetInfo.target],
          {
              stdio: "inherit",
              env: { ...process.env, BUN_BE_BUN: "1" },
          }
      );
      
      if (compileResult.status === 0) {
          console.log("Compilation successful.");
      } else {
          console.error("Compilation failed.");
      }
      process.exit(compileResult.status ?? 0);
  }

  if (command === "export") {
      await exportPackage(entryFile);
      process.exit(0);
  }

  if (command === "add") {
      await addPackage(args[0]);
      process.exit(0);
  }

  if (command === "install") {
      await installDependencies();
      process.exit(0);
  }

  if (command === "remove") {
      const pkgName = args[0];
      const targetDir = path.join(projectRoot, "zsc_modules", pkgName);
      rmSync(targetDir, { recursive: true, force: true });
      updatePackageJson(pkgName, null, true);
      console.log(`Removed package ${pkgName}`);
      process.exit(0);
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
