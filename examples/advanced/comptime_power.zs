// examples/advanced/comptime_power.zs

// 1. Compile-time variable evaluation
comptime let OS = process.platform;
comptime let ARCH = process.arch;

// 2. Compile-time code injection based on environment
comptime {
    if (OS == "linux") {
        ZScript.emit("fn getPlatformInfo() : String { return \"Running on Linux\"; }\n");
    } else {
        ZScript.emit("fn getPlatformInfo() : String { return \"Running on non-Linux\"; }\n");
    }
}

// 3. Compile-time file system access
comptime {
    let fs = require("node:fs");
    let path = require("node:path");
    // Use ZScript.path (absolute path of this file) to find showcase dir relative to this script
    let showcaseDir = path.join(path.dirname(ZScript.path), "..", "showcase");
    let files = fs.readdirSync(showcaseDir);

    ZScript.emit("struct ShowcaseFiles {\n");
    for (let i = 0; i < files.length; i += 1) {
        let file = files[i];
        if (file.endsWith(".zs")) {
            let name = file.replace(".zs", "");
            ZScript.emit("  " + name + ": String;\n");
        }
    }
    ZScript.emit("}\n");
}

// 4. Compile-time fetch
comptime {
    try {
        let p = fetch("https://api.github.com/zen");
        let resp = await p;
        let t = resp.text();
        let text = await t;
        ZScript.emit("const GITHUB_ZEN = \"" + text + "\";\n");
    } catch (e) {
        ZScript.emit("const GITHUB_ZEN = \"Peace of mind is better than any GitHub zen\";\n");
    }
}

fn main() {
    console.log("Compiler OS: " + OS);
    console.log("Compiler ARCH: " + ARCH);
    console.log(getPlatformInfo());

    // The ShowcaseFiles struct was generated at compile-time!
    let info = new ShowcaseFiles({
        control_flow: "Check",
        functional_features: "Check",
        nominal_typing: "Check",
        structural_interfaces: "Check"
    });

    console.log("Generated struct field check: " + info.control_flow);
    console.log("GitHub Zen (fetched at compile-time): " + GITHUB_ZEN);
}

main();
