function addAndSubtract(arr) {

    let arrLength = arr.length;
    let modifiedArray = [];
    let sumOriginalArr = 0;
    let sumModifiedArr = 0;

    for (let i = 0; i < arrLength; i++) {

        currNum = Number(arr[i]);
        sumOriginalArr += currNum;

        if (currNum % 2 === 0) {
            currNum += i;
            modifiedArray.push(currNum);
            sumModifiedArr += currNum;
        } else {
            currNum -= i;
            modifiedArray.push(currNum);
            sumModifiedArr += currNum;
        }

    }
    console.log(modifiedArray);
    console.log(sumOriginalArr);
    console.log(sumModifiedArr);
}
addAndSubtract([5, 15, 23, 56, 35])