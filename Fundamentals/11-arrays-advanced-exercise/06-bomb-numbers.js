function bombNumbers(sequenceOfNums, specialBombNum) {

    let bombNumber = specialBombNum[0];
    let powerNumber = specialBombNum[1];
    let sequenceOfNumsLength = sequenceOfNums.length;

    for (let i = 0; i < sequenceOfNumsLength; i++) {
        let currNum = sequenceOfNums[i];
        if (currNum === bombNumber) {
            sequenceOfNums.splice(i - powerNumber, powerNumber * 2 + 1); //remove powerNumbers from left of bombNum and from right of it, including it.
        }
    }

    let output = sequenceOfNums.reduce((a, b) => a + b); //sum the numbers in array
    console.log(output);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);