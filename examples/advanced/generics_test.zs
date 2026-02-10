class Box<T> {
    private let item: T;
    constructor(i: T) {
        this.item = i;
    }
    public fn get(): T {
        return this.item;
    }
}

fn wrap<T>(val: T): Box<T> {
    return new Box<T>(val);
}

fn main() {
    let b: Box<Number> = wrap::<Number>(123);
    console.log("Generic Box contains:", b.get());

    let s: Box<String> = new Box<String>("Hello Generics");
    console.log("Generic Box contains:", s.get());
}
main();
