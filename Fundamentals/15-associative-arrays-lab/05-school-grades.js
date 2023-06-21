function schoolGrades(input) {

    const studentGrades = {};

    input.forEach(line => {
        const [studentName, ...studentGrade] = line.split(' ');
        const studentGradeNumArray = studentGrade.map(Number);

        if (!studentGrades[studentName]) {
            studentGrades[studentName] = [];
        }

        studentGrades[studentName] = studentGrades[studentName].concat(studentGradeNumArray);

    });

    let entriesGrades = Object.entries(studentGrades);
    entriesGrades.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grade] of entriesGrades) {
        let sum = grade.reduce((a, b) => a + b);
        let avr = sum / grade.length;
        console.log(`${name}: ${avr.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);