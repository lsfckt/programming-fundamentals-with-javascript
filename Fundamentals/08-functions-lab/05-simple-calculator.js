function calculate(firstNum, secNum, operator) {

    switch (operator) {
        case 'multiply':
            let multiply /* name */ = (firstNum, secNum) /* parameters */ => firstNum * secNum; /* action */
            console.log(multiply(firstNum, secNum));
            break;
        case 'divide':
            let divide = (firstNum, secNum) => firstNum / secNum;
            console.log(divide(firstNum, secNum));
            break;
        case 'add':
            let add = (firstNum, secNum) => firstNum + secNum;
            console.log(add(firstNum, secNum));
            break;
        case 'subtract':
            let subtract = (firstNum, secNum) => firstNum - secNum;
            console.log(subtract(firstNum, secNum));
            break;
    } 
}
calculate(5, 5, 'multiply')
