fn double(n: Number): Number { return n * 2; }
fn inc(n: Number): Number { return n + 1; }
fn describe(n: Number): String {
    return match n {
        1 => "one"
        2 => "two"
        default => "many"
    };
}

fn main() {
    let res: Number = 5 |> double |> inc;
    console.log("Result (5 |> double |> inc):", res);

    let d: String = describe(1);
    console.log("Description of 1:", d);

    let m: String = match res {
        11 => "Eleven"
        default => {
            console.log("Match block executed for default case");
            "Something else";
        }
    };
    console.log("Match result:", m);
}
main();
