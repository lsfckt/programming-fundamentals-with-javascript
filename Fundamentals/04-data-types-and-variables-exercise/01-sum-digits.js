function sumDigits(number) {

    let numToString = number.toString();
    let sumOfDigits = 0;

    for (let i = 0; i < numToString.length; i++) {

        let curDigit = Number(numToString[i]);
        sumOfDigits += curDigit;

    }
    console.log(sumOfDigits);
}
sumDigits(97561)