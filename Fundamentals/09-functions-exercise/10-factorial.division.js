function factorialDivision(firstNum, secondNum) {

    let sumOfFirst = firstNum;
    let sumOfSecond = secondNum;

    for (let i = firstNum - 1; i >= 1; i--) {
        let currNum = i;
        sumOfFirst = sumOfFirst * currNum;
    }

    for (let j = secondNum - 1; j >= 1; j--) {
        let currNum = j;
        sumOfSecond = sumOfSecond * currNum;
    }

    let dividedResult = sumOfFirst / sumOfSecond;
    console.log(dividedResult.toFixed(2));

}
factorialDivision(6, 2);