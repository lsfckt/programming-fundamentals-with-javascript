function palindromeIntegers(arr) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let currNum = String(arr[i]);
        let backwardNum = '';
        const currNumLength = currNum.length;

        for (let j = currNumLength - 1; j >= 0; j--) {
            backwardNum += String(currNum[j]);
        }

        if (backwardNum != currNum) {
            console.log('false');
        } else {
            console.log('true');
        }
    }
}
palindromeIntegers([32, 2, 232, 1010]);