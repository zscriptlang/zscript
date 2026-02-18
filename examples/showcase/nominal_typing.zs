struct User { id: Number; name: String; }
struct Product { id: Number; name: String; }

fn printUser(u: User) {
    console.log("User:", u.name);
}

fn main() {
    let u: User = new User({ id: 1, name: "Alice" });
    let p: Product = new Product({ id: 2, name: "Widget" });

    printUser(u);
    console.log("Nominal typing works: User and Product are distinct even if structurally identical.");
    // printUser(p); // This would fail if uncommented
}
main();
