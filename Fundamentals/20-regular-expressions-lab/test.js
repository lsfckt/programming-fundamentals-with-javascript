function test() {

    let text = '14.37.2023';
    let regExp = /\d{2}.\d{1}.\d{4}/g;

    let isValidText = regExp.test(text);
    console.log(isValidText);

}
test();