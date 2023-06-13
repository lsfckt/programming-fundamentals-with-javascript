function employee(names) {

    let employeeList = {};

    names.forEach(name => {
        employeeList.employeeName = name;
        employeeList.personalNum = name.length;
        console.log(`Name: ${employeeList.employeeName} -- Personal Number: ${employeeList.personalNum}`);

    });

}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);