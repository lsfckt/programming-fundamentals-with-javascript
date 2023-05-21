function addAndSubtract(firstNum, secNum, thirdNum) {

    function add(firstNum, secNum) { // params could be with different names
        let sumResult = firstNum + secNum;
        return sumResult;
    }
    let sum = add(firstNum, secNum); // here invoking function with main parameters

    function subtract(x, c){
        let subtractResult = x - c;
        return subtractResult;
    }
    let finalSubtract = subtract(sum, thirdNum);

    console.log(finalSubtract);

}
addAndSubtract(23, 6, 10)
