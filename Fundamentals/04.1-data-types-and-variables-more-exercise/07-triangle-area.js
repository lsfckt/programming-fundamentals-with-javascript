function triangleArea(first, second, third) {

    let s = (first + second + third) / 2;
    let A1 = (s - first) * (s - second) * (s - third);
    let A2 = s * A1;
    let A3 = Math.sqrt(A2, 2);
    console.log(A3);

}
triangleArea(2, 3.5, 4);