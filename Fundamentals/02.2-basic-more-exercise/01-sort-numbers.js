function sortNumbers(a, b, c) {

    if (a >= b && b >= c) {
        console.log(a);
        console.log(b);
        console.log(c);
    } else if (c >= b && b >= a) {
        console.log(c)
        console.log(b);
        console.log(a);
    } else if (b >= a && a >= c) {
        console.log(b);
        console.log(a);
        console.log(c);
    } else if (b >= c && c >= a) {
        console.log(b);
        console.log(c);
        console.log(a);
    } else if (a >= c && c >= b) {
        console.log(a);
        console.log(c);
        console.log(b);
    } else if (c >= a && a >= b) {
        console.log(c);
        console.log(a);
        console.log(b);
    }

}
sortNumbers(0,

    0,

    2);