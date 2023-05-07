function amazingNumbers(number) {

    let numToString = number.toString();
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let curDigit = Number(numToString[i]);
        sum += curDigit;

    }

    let sumToString = sum.toString();
    let isAmazing;

    for (let i = 0; i < sumToString.length; i++) {
        let curDigit = Number(sumToString[i]);

        isAmazing = curDigit === 9 ? true : false;
    }


    if (isAmazing) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }

}
amazingNumbers(999)