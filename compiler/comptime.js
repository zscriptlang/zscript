import antlr4 from "antlr4";
import { createRequire } from "module";
import ZScriptLexer from "./ZScriptLexer.js";
import ZScriptParser from "./ZScriptParser.js";
import ZTranspiler from "./transpiler.js";

const require = createRequire(import.meta.url);

export async function processComptime(source, filePath) {
    let currentSource = source;
    let iterations = 0;
    const MAX_ITERATIONS = 100;

    const comptimeContext = {
        ZScript: {
            emit: (code) => { emittedCode = code; }, // Will be set per node
            path: filePath,
        },
        console, fetch, process, Bun, require
    };

    while (iterations < MAX_ITERATIONS) {
        const input = new antlr4.InputStream(currentSource);
        const lexer = new ZScriptLexer(input);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ZScriptParser(tokens);
        const tree = parser.program();

        const comptimeNodes = [];

        const findComptime = (node) => {
            if (node.constructor.name === "ComptimeStmtContext" ||
                node.constructor.name === "ComptimeVarDeclContext") {
                comptimeNodes.push(node);
            }
            if (node.children) {
                for (const child of node.children) findComptime(child);
            }
        };
        findComptime(tree);

        if (comptimeNodes.length === 0) break;

        const node = comptimeNodes[0];
        let currentEmission = "";
        comptimeContext.ZScript.emit = (code) => { currentEmission += code; };

        if (node.constructor.name === "ComptimeStmtContext") {
            const block = node.block();
            const transpiler = new ZTranspiler(tokens, currentSource);
            const blockJs = transpiler.visit(block);

            const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
            const contextKeys = Object.keys(comptimeContext).join(", ");
            const fn = new AsyncFunction("context", `
                const { ${contextKeys} } = context;
                ${blockJs}
            `);
            await fn(comptimeContext);
        } else {
            const varDecl = node.varDecl();
            const kindNode = varDecl.LET() || varDecl.VAR() || varDecl.CONST();
            const kind = kindNode.getText();
            const name = varDecl.Identifier().getText();
            const expr = varDecl.expression();
            if (expr) {
                const transpiler = new ZTranspiler(tokens, currentSource);
                const exprJs = transpiler.visit(expr);

                const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
                const contextKeys = Object.keys(comptimeContext).join(", ");
                const fn = new AsyncFunction("context", `
                    const { ${contextKeys} } = context;
                    return ${exprJs};
                `);
                const val = await fn(comptimeContext);
                comptimeContext[name] = val; // Store for next blocks
                currentEmission = `${kind} ${name} = ${JSON.stringify(val)};`;
            }
        }

        const start = node.start.start;
        const stop = node.stop.stop;
        currentSource = currentSource.slice(0, start) + currentEmission + currentSource.slice(stop + 1);

        iterations++;
    }
    return currentSource;
}
