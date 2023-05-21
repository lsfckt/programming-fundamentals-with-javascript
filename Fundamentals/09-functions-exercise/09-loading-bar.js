function loadingBar(percent) {

    let printPercent = percent + '%';
    let printLoadingPercent = '';
    let printUnloading = '';

    if (percent === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }

    let firstNum = percent / 10;

    for (let i = 0; i < firstNum; i++) {
        printLoadingPercent += '%';
    }

    for (let j = 0; j < 10 - firstNum; j++) {
        printUnloading += '.';
    }

    if (percent != 100) {
        console.log(`${printPercent} [${printLoadingPercent}${printUnloading}]`);
        console.log('Still loading...');
    }
}
loadingBar(0)