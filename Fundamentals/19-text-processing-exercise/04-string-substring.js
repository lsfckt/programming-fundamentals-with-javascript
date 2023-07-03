function stringSubstring(word, text) {

    let lower = text.toLowerCase();
    let splited = lower.split(' ');

    for (token of splited) {

        if (word === token) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);