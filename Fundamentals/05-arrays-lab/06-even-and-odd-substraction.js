function substraction(arr) {

    let evenSum = 0;
    let oddSum = 0;


    for (let i = 0; i < arr.length; i++) {

        let currNum = arr[i];
        currNum % 2 === 0 ? evenSum += currNum : oddSum += currNum;
    }

    console.log(evenSum - oddSum);  

}
substraction([3, 5, 7, 9])