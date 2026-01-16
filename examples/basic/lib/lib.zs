// lib.zs

/// Configuration struct
export struct Config {
    id: Number;
    active: Boolean;
}

/// System status enum
export enum Status {
    Idle,
    Running,
    Error
}

/// Simple version function
export fn getVersion(): Number {
    return 1.0;
}

/// A class with fields, constructor, methods, and defer usage
export class Machine {
    let id: Number;
    let status: Status;

    constructor(id: Number) {
        this.id = id;
        this.status = Status.Idle;

        defer console.log("Machine constructor finished for id:", this.id);
    }

    start(): Status {
        this.status = Status.Running;
        return this.status;
    }

    stop(): Status {
        this.status = Status.Idle;
        return this.status;
    }

    info(): String {
        return "Machine #" + this.id;
    }
}
