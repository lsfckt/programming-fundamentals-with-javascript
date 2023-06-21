function wordOccurrences(words) {

    const occurrences = new Map();

    words.forEach(currWord => {

        if (!occurrences.has(currWord)) {
            occurrences.set(currWord, 1)
        } else {
            let value = occurrences.get(currWord);
            occurrences.set(currWord, value + 1)
        }
    });

    let sorted = Array.from(occurrences).sort((a, b) => b[1] - a[1]);
    for (const [word, occurs] of sorted) {
        console.log(`${word} -> ${occurs} times`);
    }
}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);