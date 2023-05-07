function integerAndFloat(first, second, third) {

    let sum = first + second + third;

    let output = sum % 1 === 0 ? 'Integer' : 'Float';

    console.log(`${sum} - ${output}`);

}
integerAndFloat(100, 200, 303 )