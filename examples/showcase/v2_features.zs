import { libFn } from "./v2_reexport";

enum Status {
    Ok = "OK",
    Fail = "FAIL"
}

type Mode = "debug" | "release";

class User {
    let _name: string;
    constructor(name: string) { this._name = name; }
    
    get name(): string { return this._name; }
    set name(v: string) { this._name = v; }
}

macro logAll(...msgs) {
    return "js { console.log('LogAll:', " + msgs.join(", ") + "); }";
}

macro logArgs() {
    return "js { console.log('Args count:', " + ZScript.args.length + "); }";
}

fn main() {
    let u: unknown = "anything";
    // let s: string = u; // This should fail if uncommented
    
    let m: Mode = "debug";
    
    let user = new User("Alice");
    js { console.log("User:", user.name); }
    user.name = "Bob";
    js { console.log("User renamed:", user.name); }
    
    let status = Status.Ok;
    js { console.log("Status:", status); }
    
    logAll!("a", "b", "c");
    logArgs!(1, 2, 3, 4, 5);
    
    js { console.log("Re-export test:", libFn()); }
}
main();
