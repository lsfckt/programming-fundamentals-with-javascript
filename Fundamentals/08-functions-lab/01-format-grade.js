function formatGrade(grade) {

    let output = '';

    if (grade < 3) {
        output = 'Fail (2)';
        console.log(output);
        return;
    } else if (grade < 3.50) {
        output = 'Poor';
    } else if (grade < 4.50) {
        output = 'Good';
    } else if (grade < 5.50) {
        output = 'Very good';
    } else {
        output = 'Excellent'
    }

    console.log(`${output} (${grade.toFixed(2)})`);

}
formatGrade(2.99)