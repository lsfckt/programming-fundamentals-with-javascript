function matchAllFn() {

    let text = 'test1test2';
    let regExp = /t(e)(st(\d?))/g;

    let matchArr = [...text.matchAll(regExp)];
    console.log(matchArr[0]);

}
matchAllFn();