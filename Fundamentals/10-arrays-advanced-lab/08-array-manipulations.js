function arrayManipulations(commands) {

    let arr = commands.shift();
    arr.split(' ');
    arr.map(Number);

}
arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);