function countStringOccurrs(str, searchingWord) {

    let splited = str.split(' ');
    let count = 0;

    splited.forEach(el => {
        if (el === searchingWord) {
            count++;
        }
    });
console.log(count);
}
countStringOccurrs('This is a word and it also is a sentence', 'is');