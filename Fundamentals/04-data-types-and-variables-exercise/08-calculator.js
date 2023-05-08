function calculator(first, operator, second) {

    let result = 0;

    switch (operator) {
        case '+': result = first + second; break;
        case '-': result = first - second; break;
        case '/': result = first / second; break;
        case '*': result = first * second; break;
    }

    console.log(result.toFixed(2))

}
calculator(5, '+', 10)