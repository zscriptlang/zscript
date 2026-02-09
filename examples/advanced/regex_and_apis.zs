import { greet } from "./helper.js";
import { writeFileSync } from "node::fs";

fn main() {
    // Regex support
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let testEmail = "user@example.com";

    // JS block for easy interop if needed
    js {
        const isMatch = emailRegex.test(testEmail);
        console.log(`Is '${testEmail}' a valid email? ${isMatch}`);
    }

    // Call JS function
    console.log(greet("ZScript User"));

    // Use Node API (via node::fs)
    let content = "ZScript with Node APIs works!";
    // In a real environment, this would write a file.
    // Here we just show it compiles and runs if node:fs is available.
    console.log("Attempting to use node::fs...");
    // writeFileSync("test.txt", content);
    console.log("Node API import successful (type checked as Any)");
}

main();
