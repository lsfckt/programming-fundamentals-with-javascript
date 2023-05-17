function signCheck(numOne, numTwo, numThree) {

    let devide = (numOne, numTwo) => numOne * numTwo; //arrow function
    let result = devide(numOne, numTwo) * numThree;
    return result < 0 ? 'Negative' : 'Positive'

}
let returned = signCheck(5, 12, -15)
console.log(returned);