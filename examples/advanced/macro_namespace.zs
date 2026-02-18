import lib from "./macro_lib.zs";

fn main() {
    lib.assert!(1 == 1, "test");
    console.log("Namespaced macro test passed!");
}

main();
