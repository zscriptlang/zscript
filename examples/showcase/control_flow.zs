fn main() {
    defer console.log("Final cleanup (defer LIFO 2)");
    defer console.log("Cleaning up (defer LIFO 1)");
    
    queue console.log("First step (queue FIFO 1)");
    queue console.log("Second step (queue FIFO 2)");

    let count: Number = 0;
    unless (count > 2) {
        console.log("Unless Count is:", count);
        count = count + 1;
    }

    repeat 2 {
        console.log("Repeating...");
    }

    forever {
        console.log("Forever loop - break after first iteration");
        break;
    }
}
main();
