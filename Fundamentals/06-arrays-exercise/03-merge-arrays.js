function mergeArrays(firstArr, secondArr) {

    let thirdArr = [];
    let firstLength = firstArr.length;

    for (let i = 0; i < firstLength; i++) {
        let firstElement = firstArr[i];

        for (let j = i; j <= i; j++) {
            let secondElement = secondArr[j];
            if (j % 2 === 0) {
                thirdArr.push(Number(firstElement) + Number(secondElement)); // sum both elements at its index
            } else {
                thirdArr.push(firstElement + secondElement); // concatenate both elements at its index
            }
        }
    }
    console.log(thirdArr.join(' - '));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)