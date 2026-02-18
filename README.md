<p align="center">
  <img src="https://github.com/user-attachments/assets/41d78723-3600-4ea7-8425-750d535ccece" width="200" alt="zscript logo">
</p>

# ZScript (Also called Zed Script)

**ZScript** is a modern, high-performance, typesafe language designed for application-scale development. While it feels familiar to JavaScript and TypeScript users, ZScript introduces advanced meta-programming capabilities—like **Macros** and **Compile-time execution**—that push it far beyond the limits of standard transpilers.

ZScript compiles to readable, standards-based JavaScript or can be bundled into native binaries for Bun, Node.js, and browser environments.

---

## 🚀 Why ZScript? (Beyond TypeScript)

ZScript includes everything you love about TypeScript (static typing, generics, interfaces) but adds powerful features that TS lacks:

* **`comptime`** – Execute arbitrary async logic during compilation. Inline API data or Platform-Specific code or pre-calculate complex math before the code even reaches the user.
* **`macro`** – Native compile-time code generators. Splice logic directly into your source at call sites with `!` syntax.
* **`defer` / `queue`** – Reliable scope-exit cleanup (LIFO/FIFO), similar to Go and Zig.
* **Pipe Operator (`|>`)** – Clean, functional chaining for readable data processing.
* **`match` Expressions** – A powerful, expression-based version of `switch` that returns values directly.
* **Ergonomic Loops** – Built-in `repeat N`, `forever`, and `unless` for cleaner control flow.
* **Native Escape Hatch** – Use `js { ... }` blocks to write raw JavaScript without the compiler interfering.

---

## 📦 Core Features

### Type System & Logic
- **Advanced Typing:** Nominal + Structural rules, Union types, Literal types, and Generics.
- **Async First:** Full support for `async/await`, generators (`fn*`), and `async for` loops.
- **Robust Declarations:** Structs, Classes (static, extends, getters/setters), Enums, and Type Aliases.

### Language Built-ins
- **Pattern Matching:** `match` expressions with exhaustive checking.
- **Cleanup:** `defer` for closing files/connections automatically.
- **Error Handling:** `fail` shorthand for clean error throwing.

### Module & Package Management
- **Three-tier Resolution:** Local → `zsc_modules` → NPM.
- **Built-in Registry:** Native support for `pkg.zscript.us.kg` and `.zsp` archives.
- **Header Generation:** `.dh` files automatically extract documentation and API surfaces.

---

## 🤝 Contribute
ZScript is an open-source project and we welcome contributions!
<br>
Submit Bugs: Open an issue to help us improve.
<br>
Code Review: Check out our src/compiler to see how our semantic analyzer works.
<br>
Registry: Publish your own ZScript packages to pkg.zscript.us.kg.

---

## A note from Developer of ZScript.
Hi everyone, ZScript is a powerful language and a strong candidate for feature.
Currently i am working on ZScript alone i will be very happy is some devs join me.
<br>
Please if you want to help, help me in buying A Domain for ZScript.
Also need to mention some things which are the pillar of ZScript.
 - Bun: Fast JS Runtime(Base of zsc).
 - ANTLR: Powerful parser generator(Base of Grammar).
 - Jules: This AI helped very much in coding the language.
