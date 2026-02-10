type ID = Number;

struct User {
    id: ID;
    name: String;
}

struct Product {
    id: ID;
    name: String;
}

fn printUser(u: User) {
    console.log("User:", u.name);
}

fn main() {
    let u: User = new User({ id: 1, name: "Alice" });
    let p: Product = new Product({ id: 2, name: "Widget" });

    printUser(u); // Should pass
    
    // printUser(p); // Should FAIL if nominal
    
    let myId: ID = 10;
    let otherId: Number = myId; // Type aliases are structural (compatible with base type)
    let backAgain: ID = otherId;
    
    console.log("IDs:", myId, otherId, backAgain);
}

main();
