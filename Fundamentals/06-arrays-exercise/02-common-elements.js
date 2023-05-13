function commonElements(firstArr, secondArr) {

    let firstLength = firstArr.length;
    let secondLength = secondArr.length;

    for (let i = 0; i < firstLength; i++) {

        let firstElement = firstArr[i];

        for (let j = 0; j < secondLength; j++) {

            let secondElement = secondArr[j];

            if (firstElement === secondElement) {
                console.log(firstElement);
            }
        }
    }
}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)