function arrayManipulations(commands) {

    //create new array which will manipulate with the first string from the input
    
    let newArr = commands.shift().split(' '); // get first element and returned it in new variable, and mutated original arr. Than split the elements in new arr.
    let commandsLength = commands.length;
    
    for (let i = 0; i < commandsLength; i++) { // loop throuh the original arr
        let currCommand = commands[i];
        let command = currCommand.split(' '); // split command name and num/index

        switch (command[0]) {
            case 'Add':     // • Add {number}: add a number to the end of the array
                newArr.push(command[1]);
                break;
            case 'Remove':  //  • Remove {number}: remove all occurrences of a particular number from the array
                newArr = newArr.filter(el => el !== command[1]);
                break;
            case 'RemoveAt': //  • RemoveAt {index}: removes number at a given index
                newArr.splice(command[1], 1)
                break;
            case 'Insert': //  • Insert {number} {index}: inserts a number at a given index 
                newArr.splice(command[2], 0, command[1]);
                break;
        }
    }
    console.log(newArr.join(' '));
}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);
