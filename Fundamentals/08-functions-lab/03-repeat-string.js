function repeatSring(string, repeatCount) {

    let newString = '';

    for (let i = 0; i < repeatCount; i++) {
        newString += string;
    }
    return newString;

}
let returnedString = repeatSring('String', 2)
console.log(returnedString);