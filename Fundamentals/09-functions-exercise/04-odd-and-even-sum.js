function oddAndEven(number) {

    let evenSum = 0;
    let oddSum = 0;
    let numToString = number.toString();
    let numToStringLength = numToString.length;

    for (let i = 0; i < numToStringLength; i++) {
        let currNum = Number(numToString[i]);

        if (currNum % 2 === 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEven(1000435)