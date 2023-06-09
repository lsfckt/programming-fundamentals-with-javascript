function phoneBook(arr) {

    let phoneList = {};

    arr.forEach(line => {
        let [name, phoneNumber] = line.split(' ');
        phoneList[name] = phoneNumber;
    });

    for (const name in phoneList) {
        console.log(`${name} -> ${phoneList[name]}`);
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);