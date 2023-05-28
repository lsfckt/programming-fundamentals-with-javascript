function searchNumber(firstArr, secondArr) {

    let takeNum = secondArr[0]; //The first number represents the number of elements you have to take from the first array (starting from the first one).
    let deleteNum = secondArr[1]; //The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).
    let searchingNum = secondArr[2]; //The third number is the number we search in our collection after the manipulations.
    let newArr = [];

    for (let take = 0; take < takeNum; take++) {
        newArr.push(firstArr[take]);
    }

    for (let remove = 0; remove < deleteNum; remove++) {
        newArr.shift();
    }

    let occurs = 0;
    for (let includes = 0; includes < newArr.length; includes++) {
        if (newArr[includes] === searchingNum) {
            occurs++;
        }
    }
    console.log(`Number ${searchingNum} occurs ${occurs} times.`);
}
searchNumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);