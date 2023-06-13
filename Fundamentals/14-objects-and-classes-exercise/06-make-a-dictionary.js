function dictionary(jsonString) {

    let nestedObj = {};
    let assignObj = {};

    jsonString.forEach(line => {
        let obj = JSON.parse(line); //parse json in object
        nestedObj['line']; // nested obj in original object

        assignObj = Object.assign(nestedObj, obj); // first param is target, second is source; copyed of nested obj without repeatability

    });
    let sortedKeys = Object.keys(assignObj).sort(); // sorted by keys

    sortedKeys.forEach(function (key) { // loop each
        console.log('Term: ' + key + ' => Definition: ' + assignObj[key]);
    })

}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);