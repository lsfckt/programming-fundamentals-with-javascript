function sumElements(input) {

    // Variant 1 (short):
    // let firstElement = input[0];
    // let lastElement = input[input.length - 1];
    // console.log(firstElement + lastElement);


    //Variant 2 (more detailed):
    let firstElement = input[0];
    let lastElement = 0;

    for (let i = 0; i < input.length; i++) {

        let currElement = Number(input[i]);

        if (i === (input.length - 1)) {
            lastElement = currElement;
        }
    }

    let sum = firstElement + lastElement;

    console.log(sum);

}
sumElements([10, 17, 22, 33])