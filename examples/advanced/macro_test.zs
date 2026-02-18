import { assert, counter, Data } from "./macro_lib.zs";

fn main() {
    let x = 10;
    assert!(x == 10, "x should be 10");
    
    console.log("Assertion passed!");

    // Destructuring
    let d = new Data({ id: 1, name: "ZScript" });
    let { id, name } = d;
    console.log("ID:", id, "Name:", name);

    let [first, second] = [1, 2];
    console.log("First:", first, "Second:", second);

    // Generator
    console.log("Counting:");
    for (let c of counter(3)) {
        console.log(c);
    }

    // Spread
    let arr1 = [1, 2];
    let arr2 = [...arr1, 3, 4];
    console.log("Combined array:", arr2.length);

    let obj1 = { a: 1 };
    let obj2 = { ...obj1, b: 2 };
    console.log("Combined object.b:", obj2.b);
}

main();
