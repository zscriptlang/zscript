/// <Summary>
/// This is a sample class for header testing.
/// </Summary>
public class Service {
    /// <Summary>
    /// A public field that should be in the header.
    /// </Summary>
    public let version: String = "1.0.0";

    /// <Summary>
    /// A private field that should NOT be in the header.
    /// </Summary>
    private let secret: Number = 42;

    /// <Summary>
    /// A public method that should be in the header.
    /// </Summary>
    public fn run() {
        console.log("Service running...");
    }
}

/// <Summary>
/// A top-level public function.
/// </Summary>
public fn init() {
    console.log("Initialized");
}

fn main() {
    let s: Service = new Service({});
    s.run();
    init();
}
main();
