function convert(json) {

    let object = JSON.parse(json);
    let entries = Object.entries(object)
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');