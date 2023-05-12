function reverseInPlace(arr) {

    let result = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        // can to do with incremetation and join()
        result += arr[i] + ' ';

    }

    console.log(result);

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])