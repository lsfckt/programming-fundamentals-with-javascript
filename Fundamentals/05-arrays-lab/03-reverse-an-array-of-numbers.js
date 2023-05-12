function reverseNumbers(number, inputArr) {

    let newArr = [];
    for (let i = 0; i < number; i++) {
        let currNum = Number(inputArr[i]);

        newArr.push(currNum);
        
    }

    let output = '';

    for (let i = newArr.length - 1; i >= 0; i--) {

        output += Number(newArr[i]) + ' '

    }
    console.log(output);
}
reverseNumbers(3, [10, 20, 30, 40, 50])