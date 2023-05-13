function arrayRotation(arr, rotationsNumber) {

    for (let i = 0; i < rotationsNumber; i++) {

        let firstElement = arr.shift();
        arr.push(firstElement);

    }

    let output = '';

    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + ' ';
    }
    console.log(output);

}
arrayRotation([51, 47, 32, 61, 21], 2)