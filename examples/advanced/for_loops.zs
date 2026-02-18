fn main(): void {
    let list: Number[] = [1, 2, 3];
    
    console.log("For...of loop:");
    for (let x of list) {
        console.log(x);
    }
    
    console.log("For...in loop:");
    let obj = { a: 1, b: 2 };
    for (let k in obj) {
        console.log(k);
    }

    console.log("Standard loop:");
    for (let i = 0; i < list.length; i = i + 1) {
        console.log(list[i]);
    }
}

main();
