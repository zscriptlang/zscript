comptime {
    ZScript.emit(`
        struct GeneratedStruct {
            id: Number;
            name: String;
        }
        
        fn sayHello(msg: String): void {
            console.log("Comptime emitted: " + msg);
        }
    `);
}

fn main(): void {
    let s = new GeneratedStruct({ id: 1, name: "ZScript" });
    console.log(s.name);
    sayHello("Hello from emitted code!");
}

main();
