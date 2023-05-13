function magicSum(arr, number) {
 
    let uniquePairs = '';

    let arrLength = arr.length;
 
    for (let i = 0; i < arrLength ; i++) {
        let pairsSum = 0;

        let firstUnique = Number(arr[i]);
 
        for (let j = i + 1; j < arrLength; j++) {
            let secondUnique = Number(arr[j]);
 
            pairsSum = firstUnique + secondUnique;
            if (pairsSum === number) {
                uniquePairs += firstUnique + ' ' + secondUnique + '\n';
               
            }
        }
    }
    console.log(uniquePairs);
}
magicSum([1, 7, 6, 2, 19, 23],
    8)