function distance(x1, y1, x2, y2) {

    let xPoint = x2 - x1;
    let yPoint = y2 - y1

    let distance = Math.sqrt(Math.pow(xPoint, 2) + Math.pow(yPoint, 2))

    console.log(distance);

}
distance(2.34, 15.66, -13.55, -2.9985);