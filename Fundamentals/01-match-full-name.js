function matchFullName(names) {

    let pattern = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/g;
    const validNames = [];

    while ((matchedName = pattern.exec(names)) !== null) {
        validNames.push(matchedName[0]);
    }
    console.log(validNames.join(' '));

}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");