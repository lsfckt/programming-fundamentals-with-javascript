function maxNumber(arr) {

    let arrLength = arr.length;
    let topIntegers = '';

    for (let i = 0; i < arrLength; i++) {

        let currInt = arr[i];

        if (currInt > arr[i + 1] && i < arr.length && currInt > arr[arr.length - 1]) {

            topIntegers += currInt + ' ';
        }
        if (i == arrLength - 1) {
            topIntegers += arr[i];
        }
    }    
    console.log(topIntegers);
}
maxNumber([1, 4, 3, 2])