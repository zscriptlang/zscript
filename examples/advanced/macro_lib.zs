// lib.zs
export macro assert(cond, msg) {
    return `if (!(${cond})) { console.log("Assertion failed: " + ${msg}); fail "Assert"; }`;
}

export fn* counter(limit: Number) {
    for (let i = 0; i < limit; i = i + 1) {
        yield i;
    }
}

export struct Data {
    id: Number;
    name: String;
}
