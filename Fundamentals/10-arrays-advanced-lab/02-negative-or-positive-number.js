function negativeOrPositive(numbers) {

    let result = [];
    let numbersLength = numbers.length;
    for (let i = 0; i < numbersLength; i++) {
        let currNum = Number(numbers[i]);

        if(currNum < 0) {
            result.unshift(numbers[i]);
        } else {
            result.push(numbers[i]);
        }
    }
    console.log(result.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9']);