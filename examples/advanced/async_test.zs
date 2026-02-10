async fn fetchData(id: Number): String {
    console.log("Fetching data for ID:", id);
    return "Data for " + id;
}

async fn main() {
    console.log("Starting async test...");
    let result: String = await fetchData(42);
    console.log("Async result:", result);
}
main();
