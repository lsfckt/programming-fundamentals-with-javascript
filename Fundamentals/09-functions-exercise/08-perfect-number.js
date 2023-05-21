function perfectNumber(number) {

    let divisor = 0;

    for (let i = 1; i <= number / 2; i++) {

        if (number % i === 0) {
            divisor += i;
        }
    }

    if (number === divisor && divisor != 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(5)