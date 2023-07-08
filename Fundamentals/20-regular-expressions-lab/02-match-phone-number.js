function matchPhoneNumbers(phones) {

    const pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    const validPhones = [];

    while ((matchedPhones = pattern.exec(phones)) !== null) {
        validPhones.push(matchedPhones[0]);
    }

    console.log(validPhones.join(', '));

}
matchPhoneNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);