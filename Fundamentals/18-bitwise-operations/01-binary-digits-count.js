function binaryDigitsCount(int, b) {

    let decToBinary = '';
    let counter = int;

    while (counter != 0) {

        if (counter % 2 === 0) {
            decToBinary += 0
        } else {
            decToBinary += 1
        }
        counter = Math.floor(counter / 2);
    }

    let bCount = 0;
    for (num of decToBinary) {
        if (num == b){
            bCount++;
        }
    }
    console.log(bCount);
}
binaryDigitsCount(10, 0);