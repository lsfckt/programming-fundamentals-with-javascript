function amazingNumbers2(number) {

    number = number.toString();
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ?
        `${number} Amazing? True` :
        `${number} Amazing? False`);

}
amazingNumbers2(1233)