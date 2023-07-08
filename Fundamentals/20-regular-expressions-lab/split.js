function splitFunction() {

    let text = '1   2 3      4';
    let regExp = /\s+/g;

    let splited = text.split(regExp);
    console.log(splited);

}
splitFunction();