function houseParty(commands) {

    let list = [];

    for (let i = 0; i < commands.length; i++) {

        let currCommand = commands[i];
        let name = currCommand.split(' ');

        if (!currCommand.includes('not')) { //If in the command missing 'not', enters:
            if (!list.includes(name[0])) { //If in the array 'list' missing current name, add it.
                list.push(name[0])
            } else {
                console.log(`${name[0]} is already in the list!`);
            }
        } else {
            if (list.includes(name[0])) { 
                list = list.filter(names => names !== name[0]); //filtered, if in the array 'list' have current name, remove it 
            } else {
                console.log(`${name[0]} is not in the list!`);
            }
        }
    }
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);