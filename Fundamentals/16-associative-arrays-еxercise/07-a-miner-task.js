function aMinerTask(input) {

    const resourcesObj = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (resourcesObj.hasOwnProperty(resource)) {
            resourcesObj[resource] += quantity
        } else {
            resourcesObj[resource] = quantity
        }
    }

    for (line in resourcesObj) {
        console.log(`${line} -> ${resourcesObj[line]}`);
    }

}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);