function adressBook(input) {

    const adressList = {};

    for (let i = 0; i < input.length; i++) {
        const [name, adress] = input[i].split(':');
        adressList[name] = adress;
    }

    const entries = Object.entries(adressList);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    const output = Object.fromEntries(entries);
    for (const name in output) {
        console.log(`${name} -> ${output[name]}`);
    }

}
adressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);