function oddOccurences(sentence) {
    // Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
    const sentenceObject = {};
    let sentenceArray = sentence.split(' ');

    sentenceArray.forEach(element => {
        let lowerCase = element.toLowerCase();

        if (!sentenceObject[lowerCase]) {
            sentenceObject[lowerCase] = 1;
        } else {
            sentenceObject[lowerCase]++;
        }
    });

    let sorted = Object.entries(sentenceObject)
        .sort((a, b) => b[1] - a[1]);
    let sortedObj = Array.from(sorted);

    let output = ' ';
    sortedObj.forEach(element => {
        if (element[1] % 2 != 0) {
            output += element[0] + ' ';
        }
    });
    console.log(output);
}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');