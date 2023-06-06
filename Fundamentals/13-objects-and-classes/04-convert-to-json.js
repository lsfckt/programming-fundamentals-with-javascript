function json(firstName, lastName, hairColor) {

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let jsonFormat = JSON.stringify(person);
    console.log(jsonFormat);

}
json('George', 'Jones', 'Brown');