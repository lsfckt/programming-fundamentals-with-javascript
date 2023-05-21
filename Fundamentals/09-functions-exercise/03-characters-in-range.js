function charactersInRange(firstChar, secondChar) {

    let startRange = firstChar.charCodeAt();
    let finalRange = secondChar.charCodeAt();
    let printChar = '';

    if (startRange < finalRange) {
        for (let i = startRange + 1; i < finalRange; i++) {

            if (i === finalRange - 1) { //check for space at the end
                printChar += String.fromCharCode(i);
            } else {
                printChar += String.fromCharCode(i) + ' ';
            }
        }
    } else {
        for (let i = finalRange + 1; i < startRange; i++) {

            if (i === startRange - 1) {
                printChar += String.fromCharCode(i);
            } else {
                printChar += String.fromCharCode(i) + ' ';
            }
        }

    }
    console.log(printChar);
}
charactersInRange('d', 'a')