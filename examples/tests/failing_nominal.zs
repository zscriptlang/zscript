struct A { x: Number; }
struct B { x: Number; }
fn foo(a: A) {}
fn main() {
    let b: B = new B({ x: 1 });
    foo(b);
}
main();
