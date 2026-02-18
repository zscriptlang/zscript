interface HasName { name: String; }
struct User { name: String; age: Number; }
class Bot { 
    let name: String; 
    constructor(n: String) { this.name = n; }
}

fn greet(h: HasName) {
    console.log("Hello,", h.name);
}

fn main() {
    let u: User = new User({ name: "Alice", age: 30 });
    let b: Bot = new Bot("Z-Bot");

    greet(u);
    greet(b);
    console.log("Structural typing works: both User and Bot match the HasName interface.");
}
main();
