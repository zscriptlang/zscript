import { debug } from "./lib";
import * as mylib from "./lib";

fn main() {
    debug!("Direct macro call");
    mylib.debug!("Namespaced macro call");
}
main();
