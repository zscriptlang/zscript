// main.zs

import { Config, Status, getVersion, Machine } from "lib/lib.zs";

fn main(): Number {
    defer console.log("Exiting main()");

    let version: String = getVersion(); // Error: getVersion returns Number

    let cfg: Config = new Config({
        id: 101,
        active: true
    });

    let m: Machine = new Machine(cfg.id);

    let current: Status = m.start();

    console.log("Version:", version);
    console.log("Config active:", cfg.active);
    console.log("Machine info:", m.info());
    console.log("Machine status:", current);

    m.stop();

    return version; // This will also fail because main expects Number
}

main();
