function wordsTracker(wordsArray) {

    const occurrencesWords = {};
    let lookingWords = wordsArray
        .shift()
        .split(' ');

    lookingWords.forEach(currWord => {
        occurrencesWords[currWord] = 0;
    });

    wordsArray.forEach(word => {
        if (occurrencesWords.hasOwnProperty(word)) { // All strings after that will be the words in which you will check for a match.
            occurrencesWords[word]++;
        }
    });

    let entriesOccurs = Object.entries(occurrencesWords)
        .sort((a, b) => b[1] - a[1]);

    entriesOccurs.forEach(line => {
        const [word, occurs] = line;
        console.log(`${word} - ${occurs}`);
    });

}
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);