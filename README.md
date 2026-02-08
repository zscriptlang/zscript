# ZScript

ZScript is a modern, type-safe high level programming language that transpiles to JavaScript.  
It focuses on structured control flow, explicit execution ordering, and compile-time power without adding runtime overhead.

This repository contains the **official ZScript compiler (`zsc`)**, grammar, and tooling.

---
For Doing Tests i have used Jules because i dont have any servers of linux etc.
We need more users and developers to support ZScript.
Also ZScript is Fully Open that means if you have Desing and porpsal for language Syntax or Features etc you can directly make a isuue and I will accept it if it is nice.
---

## What is ZScript?

ZScript is designed for developers who want more control than JavaScript offers while still staying inside the JavaScript ecosystem.

Instead of introducing heavy runtime abstractions, ZScript performs most of its work at compile time and emits clean, readable JavaScript that runs on **Bun**.

ZScript is still evolving, but it is already usable and stable for experimentation, tooling, and language research.

---

## Project Status

- Current version: **v0.4.1**
- Stage: Active development
- Stability: Stable compiler, evolving language

ZScript is currently developed and maintained by a single developer.

To grow the project further, help from **developers, compiler enthusiasts, and testers** is needed.  
Contributions, feedback, and real-world testing are highly appreciated.

---

## Repository Structure
compiler/ - ZScript compiler (zsc)
<br>
grammar/ - ANTLR grammar and generated files
<br>
examples/ - Example ZScript programs

---

## The zsc CLI

ZScript ships with a single official tool: **zsc**.

### Build a ZScript file

Transpile a `.zs` file to JavaScript:

```bash
zsc build main.zs
```

The generated JavaScript is written to:

```
bin/js/
```

### Run a ZScript file

Compile and run immediately using Bun:

```bash
zsc run main.zs --arg1 arg2
```

Any arguments after the file name are forwarded to the program.

### Bun passthrough

zsc integrates directly with Bun and can forward Bun commands without even needing bun installed on system:

```bash
zsc bun install
zsc bun add antlr4
zsc bun run index.js
```

This allows ZScript projects to use the full JavaScript ecosystem naturally.

---

## Language Features

### New Type System

From v0.4.1 ZScript has added robust and powerful Type Checking System.
And it has been tested on Jules Also by the test scripts in example folder.

### Deferred execution

ZScript provides explicit control over execution order.

#### defer (LIFO)

Execute code at the end of a block in last-in, first-out order:

```zscript
fn example() {
  defer console.log("cleanup");
  console.log("work");
}
```

#### queue (FIFO)

Execute code at the end of a block in first-in, first-out order:

```zscript
fn example() {
  queue console.log("step 1");
  queue console.log("step 2");
}
```

### Loop enhancements

#### repeat

Fixed-count loops without boilerplate:

```zscript
repeat 3 {
  console.log("hello");
}
```

#### unless

Inverse while loop:

```zscript
unless (ready) {
  wait();
}
```

#### forever

Explicit infinite loop:

```zscript
forever {
  tick();
}
```

#### break / continue

Standard loop control statements are fully supported.

### Error handling

#### fail

Clear and expressive alias for throw:

```zscript
fail "invalid state";
```

### JavaScript escape hatch

Some JavaScript features are intentionally harder to access directly in ZScript.

When full control is required, a raw JavaScript block can be used:

```zscript
js {
  const fs = require("fs");
  console.log("raw js");
}
```

The `js` keyword is removed during transpilation, and the code inside is emitted exactly as written without any transformation.

---

## Design Philosophy

- Compile-time power, runtime simplicity
- Explicit behavior over implicit magic
- Clean, readable generated JavaScript
- Small, composable language features

ZScript aims to explore better structure and clearer intent on top of JavaScript rather than replacing it.

---

## Contributing

ZScript is currently maintained by a single developer.

You can help by:

- Reporting bugs
- Writing examples
- Improving documentation
- Testing edge cases
- Discussing language design

Even small contributions are valuable.

---

## Thanks to some projects:
   - [Bun(Fast JS Runtime)](https://bun.com/)
   - [ANTLR(powerful parser generator)](https://www.antlr.org/)

   This Tools Helped in ZScript Development.

---

   
## License

MIT License

---

ZScript is an experiment in structured control flow and explicit execution on top of JavaScript.

If that idea interests you, you are welcome to contribute.
