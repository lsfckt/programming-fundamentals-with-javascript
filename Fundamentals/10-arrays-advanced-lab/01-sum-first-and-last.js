function firstAndLast(numbers) {

    let firstEl = numbers.shift();
    let lastEl = numbers.pop();
    let sum = Number(firstEl) + Number(lastEl)
    console.log(sum);

}
firstAndLast(['20', '30', '40']); 