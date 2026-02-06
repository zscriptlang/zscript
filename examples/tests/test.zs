interface HasX { x: Number; }
struct A { x: Number; }

fn foo(h: HasX) {}

fn main() {
    let a: A = new A({ x: 1 });
    foo(a); // Should pass if structural
}
