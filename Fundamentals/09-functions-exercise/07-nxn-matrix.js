function matrix(number) {

    for (let i = 0; i < number; i++) {
        let output = '';
        output += number + ' ';

        for (let j = 0; j < number - 1; j++) {
            output += number + ' ';
        }
        console.log(output);
    }
}
matrix(2)