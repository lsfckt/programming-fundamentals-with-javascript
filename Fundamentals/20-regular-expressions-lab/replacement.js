function replacement() {

    let text = 'Aleksandar: 7 Teodora: 21';
    let replaceNum = '28';

    let regExp = /\d{2}/g;

    let result = text.replace(regExp, replaceNum);
    console.log(result);

}
replacement();