function companyUsers(input) {

    let object = {};

    input.forEach(line => {
        let [companyName, employeeId] = line.split(' -> ');

        if (object[companyName] === undefined) {
            object[companyName] = [];
        }

        if (!object[companyName].includes(employeeId)) {
            object[companyName].push(employeeId)
        }
    });

    let orderedCompany = Object.entries(object)
        .sort((a, b) => a[0].localeCompare(b[0]));

    object = Object.fromEntries(orderedCompany);

    for (const line in object) {
        console.log(line);

        object[line].forEach(element => {
            console.log(`-- ${element}`);
        });
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);