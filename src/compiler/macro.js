import antlr4 from "antlr4";
import ZScriptLexer from "./ZScriptLexer.js";
import ZScriptParser from "./ZScriptParser.js";
import ZTranspiler from "./transpiler.js";
import { createRequire } from "module";
import { processComptime } from "./comptime.js";

const require = createRequire(import.meta.url);

export class MacroExpander {
    constructor(projectModules, filePath) {
        this.projectModules = projectModules; // Map<absPath, {exports, tree, source, imports}>
        this.filePath = filePath;
        this.macros = new Map(); 
        this.collectLocalMacros();
    }

    collectLocalMacros() {
        const module = this.projectModules.get(this.filePath);
        if (!module || !module.exports) return;
        for (const [name, symbol] of module.exports) {
            if (symbol.kind === "macro") {
                this.macros.set(name, {
                    ctx: symbol.ctx,
                    params: symbol.params,
                    modulePath: this.filePath,
                    isExported: symbol.isExported
                });
            }
        }
    }

    formatError(ctx, message) {
        const token = ctx.start;
        return `${this.filePath}:${token.line}:${token.column}\nerror: ${message}`;
    }

    async expand(source) {
        if (!source || source.trim() === "") return source;
        let currentSource = source;
        let iterations = 0;
        const MAX_ITERATIONS = 100;
        let changed = true;

        while (changed && iterations < MAX_ITERATIONS) {
            changed = false;
            
            const nextSource = await processComptime(currentSource, this.filePath, this.targetInfo);
            if (nextSource !== currentSource) {
                currentSource = nextSource;
                changed = true;
            }

            const input = new antlr4.InputStream(currentSource);
            const lexer = new ZScriptLexer(input);
            const tokens = new antlr4.CommonTokenStream(lexer);
            const parser = new ZScriptParser(tokens);
            const tree = parser.program();

            const macroCalls = [];
            const findMacroCalls = (node) => {
                if (node.constructor.name === "MacroCallExpressionContext") {
                    macroCalls.push(node);
                } else if (node.children) {
                    for (const child of node.children) findMacroCalls(child);
                }
            };
            findMacroCalls(tree);

            if (macroCalls.length > 0) {
                // Expand all macros in this pass, starting from the end to keep indices valid
                const sortedCalls = macroCalls.sort((a, b) => b.start.start - a.start.start);
                
                let iterationSource = currentSource;
                for (const call of sortedCalls) {
                    const macroExpr = call.expression();
                    const macroName = macroExpr.getText();
                    const macroInfo = this.resolveMacro(macroExpr);

                    if (!macroInfo) {
                        throw new Error(this.formatError(macroExpr, `Macro '${macroName}' not found or not exported`));
                    }

                    const args = [];
                    if (call.arguments()) {
                        for (const arg of call.arguments().expression()) {
                            const start = arg.start.start;
                            const stop = arg.stop.stop;
                            const text = currentSource.slice(start, stop + 1);
                            args.push({ text: text, toString: () => text });
                        }
                    }

                    const replacement = await this.executeMacro(macroInfo, args);
                    
                    const start = call.start.start;
                    const stop = call.stop.stop;
                    iterationSource = iterationSource.slice(0, start) + replacement + iterationSource.slice(stop + 1);
                }

                if (iterationSource !== currentSource) {
                    currentSource = iterationSource;
                    changed = true;
                } else if (macroCalls.length > 0) {
                    // Infinite loop detected (macros present but didn't change source)
                    throw new Error(this.formatError(macroCalls[0], `Infinite macro expansion detected. The macro output is identical to its call site.`));
                }
            }
            iterations++;
        }

        if (iterations >= MAX_ITERATIONS) {
            throw new Error(`Exceeded maximum macro expansion iterations (${MAX_ITERATIONS}). Possible circular dependency.`);
        }

        return currentSource;
    }

    resolveMacro(exprCtx) {
        const text = exprCtx.getText();
        
        // 1. Local macro
        if (this.macros.has(text)) return this.macros.get(text);

        const module = this.projectModules.get(this.filePath);
        if (!module || !module.imports) return null;

        // 2. Imported macro
        if (text.includes(".")) {
            // Namespaced: lib.macro!
            const parts = text.split(".");
            const alias = parts[0];
            const member = parts[parts.length - 1];
            
            const imp = module.imports.find(i => {
                const stmt = (i.ctx && i.ctx.constructor.name === "ExportStmtContext") ? i.ctx.getChild(1) : i.ctx;
                if (!stmt) return false;
                let ids = [];
                if (typeof stmt.anyIdentifier === 'function') {
                    const res = stmt.anyIdentifier();
                    if (res) ids = Array.isArray(res) ? res : [res];
                }
                if (ids.length === 0 && typeof stmt.Identifier === 'function') {
                    const res = stmt.Identifier();
                    if (res) ids = Array.isArray(res) ? res : [res];
                }
                if (ids && ids.length > 0) {
                    const matched = ids[ids.length - 1].getText() === alias;
                    return matched;
                }
                return false;
            });
            if (imp) {
                const targetMod = this.projectModules.get(imp.path);
                if (targetMod && targetMod.exports && targetMod.exports.has(member)) {
                    const sym = targetMod.exports.get(member);
                    if (sym.kind === "macro" && sym.isExported) return { ctx: sym.ctx, params: sym.params, modulePath: imp.path };
                }
            }
        } else {
            // Named import: import { macro } from "./lib";
            for (const imp of module.imports) {
                const importStmt = (imp.ctx && imp.ctx.constructor.name === "ExportStmtContext") ? imp.ctx.getChild(1) : imp.ctx;
                if (importStmt && importStmt.importItems && importStmt.importItems()) {
                    for (const item of importStmt.importItems().importItem()) {
                        const originalName = item.anyIdentifier(0).getText();
                        const alias = item.anyIdentifier(1) ? item.anyIdentifier(1).getText() : originalName;
                        if (alias === text) {
                            const targetMod = this.projectModules.get(imp.path);
                            if (targetMod && targetMod.exports && targetMod.exports.has(originalName)) {
                                const sym = targetMod.exports.get(originalName);
                                if (sym.kind === "macro" && sym.isExported) return { ctx: sym.ctx, params: sym.params, modulePath: imp.path, name: originalName };
                            }
                        }
                    }
                }
            }
        }

        return null;
    }

    async executeMacro(macroInfo, args) {
        let { ctx, params, modulePath } = macroInfo;

        const macroContext = {
            ZScript: {
                target: this.targetInfo,
                path: this.filePath,
                args: args
            },
            args: args,
            require,
            fetch,
            console: {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info
            },
            process: {
                platform: process.platform,
                arch: process.arch,
                env: {}
            },
            Bun: undefined,
            global: undefined,
            globalThis: undefined
        };
        
        let block = ctx.block ? ctx.block() : null;
        if (!block && modulePath.endsWith(".dh")) {
            // Try to find the .zs file for implementation
            const zsPath = modulePath.replace(/\.dh$/, ".zs");
            if (this.projectModules.has(zsPath)) {
                const zsMod = this.projectModules.get(zsPath);
                const sym = zsMod.exports.get(macroInfo.name || ctx.anyIdentifier().getText());
                if (sym && sym.ctx.block()) {
                    block = sym.ctx.block();
                }
            }
        }

        if (!block) {
            const name = macroInfo.name || ctx.anyIdentifier().getText();
            const zsPath = modulePath.replace(/\.dh$/, ".zs");
            throw new Error(this.formatError(ctx, `Macro '${name}' has no implementation. Expected to find it in ${zsPath}`));
        }

        const transpiler = new ZTranspiler(null, null);
        const blockJs = transpiler.visit(block);
        
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        
        const setup = params.map((p, i) => {
            const name = p.pattern.getText();
            if (p.isRest) {
                return `const ${name} = args.slice(${i});`;
            }
            return `const ${name} = args[${i}];`;
        }).join("\n");

        const contextKeys = Object.keys(macroContext).join(", ");
        const fn = new AsyncFunction("context", `
            const { ${contextKeys} } = context;
            ${setup}
            ${blockJs}
        `);
        
        try {
            const result = await fn(macroContext);
            return result || "";
        } catch (e) {
            throw new Error(this.formatError(ctx, `Error executing macro '${macroInfo.name || ctx.anyIdentifier().getText()}': ${e.message}`));
        }
    }
}
