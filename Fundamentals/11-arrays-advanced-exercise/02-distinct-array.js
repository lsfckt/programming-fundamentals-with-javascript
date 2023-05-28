function distinctArray(numbers) {

    let copyedArray = [];
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        if (!copyedArray.includes(numbers[i])) {
            copyedArray.push(numbers[i]);
        }
    }
    console.log(copyedArray.join(' '));
}
distinctArray([1, 2, 3, 4])