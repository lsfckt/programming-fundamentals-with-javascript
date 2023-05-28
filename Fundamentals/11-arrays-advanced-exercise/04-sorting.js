function sorting(array) {

    let ascendingArr = array.sort((a, b) => a - b);
    let sortedArr = [];
    let ascendingLength = ascendingArr.length;

    for (let i = 0; i < ascendingLength; i++) {

        let currBigest = ascendingArr.pop();
        sortedArr.push(currBigest);

        let currSmallest = ascendingArr.shift();
        sortedArr.push(currSmallest);
    }
    console.log(sortedArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);