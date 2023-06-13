function coordinates(info) {

    let coordinatesInfo = {};

    for (let line of info) {

        let splitedLine = line.split(' | ');
        [town, latitude, longitude] = splitedLine;

        coordinatesInfo['town'] = town;
        coordinatesInfo['latitude'] = Number(latitude).toFixed(2);
        coordinatesInfo['longitude'] = Number(longitude).toFixed(2);

        console.log(coordinatesInfo);
    }
}
coordinates([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])