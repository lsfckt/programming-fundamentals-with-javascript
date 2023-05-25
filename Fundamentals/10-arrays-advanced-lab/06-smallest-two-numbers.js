function smallestNumbers(numbers) {

    let sortedArr = numbers.sort((a, b) => a - b);
    let smallestTwoEl = sortedArr.slice(0, 2);
    console.log(smallestTwoEl.join(' '));

}
smallestNumbers([3, 0, 10, 4, 7, 3]);