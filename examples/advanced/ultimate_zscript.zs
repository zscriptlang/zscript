// examples/advanced/ultimate_zscript.zs

// 1. Comptime Power (Incredibly powerful, better than Zig/D)
comptime let MODE = "PRODUCTION";
comptime let BUILD_TIME = Date.now();

// 2. Type Inference (No more redundant typing!)
let message = "ZScript is ready to take over"; 
let year = 2025;

// 3. Lambdas / Arrow Functions (Modern & Concise)
let double = (x: Number) => x * 2;
let shout = msg => msg.toUpperCase();

// 4. Null-safety & Flow-based Narrowing
fn processValue(val: String | null) {
    // Optional Chaining & Nullish Coalescing
    let firstChar = val?.length ?? 0;
    
    // Flow-based Narrowing (Compiler knows val is not null here)
    if (val != null) {
        console.log("Safe access: " + val.length);
        console.log(shout(val));
    } else {
        console.log("Val was null, but we handled it.");
    }
}

// 5. Ternary Operator
let readiness = year > 2024 ? "Full Power" : "Beta";

fn main() {
    console.log("--- ULTIMATE ZSCRIPT SHOWCASE ---");
    console.log("Mode: " + MODE);
    console.log("Build Time: " + BUILD_TIME);
    console.log(message);
    console.log("Double 21: " + double(21));
    console.log("Readiness: " + readiness);
    
    processValue("zscript");
    processValue(null);
    
    console.log("---------------------------------");
}

main();
