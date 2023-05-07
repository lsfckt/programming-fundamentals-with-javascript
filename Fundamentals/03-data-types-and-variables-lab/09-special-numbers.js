function specialNumbers(number) {

    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let lastDigit = i % 10;
        let firstDigit = Math.trunc(i / 10);
        sum = lastDigit + firstDigit;
        isSpecial = sum === 5 || sum === 7 || sum === 11 ? 'True' : 'False';
        console.log(`${i} -> ${isSpecial}`);

    }
}
specialNumbers(15)