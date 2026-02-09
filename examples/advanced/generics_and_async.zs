struct Box<T> {
    value: T;
}

async fn fetchValue<T>(val: T) : T {
    return val;
}

async fn main() {
    let numBox = new Box<Number>({ value: 42 });
    console.log("Box value: " + numBox.value);

    let result = await fetchValue::<String>("Hello Generics");
    console.log("Fetched: " + result);

    let boolResult = await fetchValue::<Boolean>(true);
    console.log("Fetched bool: " + boolResult);
}

main();
