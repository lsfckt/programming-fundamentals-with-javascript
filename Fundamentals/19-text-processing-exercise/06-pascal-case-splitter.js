function pascalCase(str) {

    let splitedString = str.split('');
    let output = '';

    for (let i = 0; i < splitedString.length; i++) {
        let char = splitedString[i];

        if (i === 0) {
            output += char;
        } else if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
            output += char;
        } else {
            output += ', ' + char;
        }

    }

    console.log(output);
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');