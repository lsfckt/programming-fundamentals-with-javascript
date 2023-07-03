function cutAndReverse(str) {

    let firstHalf = str.slice(0, (str.length / 2));
    let secondHalf = str.slice((str.length / 2));

    let firstArr = firstHalf
        .split('')
        .reverse();
    let secArr = secondHalf
        .split('')
        .reverse()

    console.log(`${firstArr.join('')}\n${secArr.join('')}`);

}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');