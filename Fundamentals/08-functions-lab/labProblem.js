function printCertificate(grade, names) {
   
    function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log(' ~~~- ~---~ -~~~' );
    }
    function formatGrade(grade) {

        let output = '';
    
        if (grade < 3) {
            output = 'Fail (2)';
            console.log('Student does not qualify');
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
    function studentNames(names) {
        return `${names[0]} ${names[1]}`

    }

    let getNames = studentNames(names)

    printHeader();
    console.log(getNames);
    formatGrade(grade);
}
printCertificate(5.25, ['Peter', 'Carter']);