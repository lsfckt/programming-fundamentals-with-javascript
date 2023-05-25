function kNumbers(numbers) {

    let kNum = numbers.shift();
    console.log(numbers.slice(0, kNum).join(' '));
    console.log(numbers.slice(numbers.length - kNum, numbers.length).join(' '));

}
kNumbers([2, 7, 8, 9])