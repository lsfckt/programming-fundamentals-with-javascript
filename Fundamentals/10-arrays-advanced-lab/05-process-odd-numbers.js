function processOddNumbers(numbers) {

    let oddElements = [];
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        let currNum = numbers[i];
        if (i % 2 != 0) {
            oddElements.push(currNum * 2);
        }
    }
    oddElements.reverse();
    console.log(oddElements.join(' '));
}
processOddNumbers([10, 15, 20, 25]);