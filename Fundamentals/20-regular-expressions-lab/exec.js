function execFn() {

    let text = 'Aleksandar: 7 Teodora: 21';
    let regExp = /([A-Z][a-z]+): (\d+)/g;

    let firstMatch = regExp.exec(text);
    let secondMatch = regExp.exec(text);

    console.log(firstMatch[0]);
    console.log(firstMatch[1]);
    console.log(firstMatch[2]);
}
execFn();