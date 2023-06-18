function friendMaintenance(commands) {

    let friendsList = commands.shift().split(', ');
    let index = 0;

    let currCommand = commands[index];
    index++;

    let blackListedCount = 0;
    let lostedCount = 0;

    while (currCommand != 'Report') {
        let [firstCommand, secondCommand, newName] = currCommand.split(' ');

        if (firstCommand === 'Blacklist') {

            if (!friendsList.includes(secondCommand)) {
                console.log(`${secondCommand} was not found.`);
            } else {
                const indexOfName = friendsList.indexOf(secondCommand);
                const blackListedName = friendsList.splice(indexOfName, 1, 'Blacklisted');
                console.log(`${blackListedName} was blacklisted.`);
                blackListedCount++;
            }
        }

        if (firstCommand === 'Error') {
            secondCommand = Number(secondCommand);

            if (secondCommand >= 0 && secondCommand < friendsList.length) {
                let currFriend = friendsList[secondCommand];

                if (currFriend != 'Blacklisted' && currFriend != 'Lost') {
                    const lostedName = friendsList.splice(secondCommand, 1, 'Lost');

                    console.log(`${lostedName} was lost due to an error.`);
                    lostedCount++;
                }
            }
        }

        if (firstCommand === 'Change') {
            secondCommand = Number(secondCommand);

            if (secondCommand >= 0 && secondCommand < friendsList.length) {

                const currName = friendsList.splice(secondCommand, 1, newName);
                console.log(`${currName} changed his username to ${newName}.`);

            }
        }

        currCommand = commands[index];
        index++;
    }

    console.log(`Blacklisted names: ${blackListedCount}`);
    console.log(`Lost names: ${lostedCount}`);
    console.log(friendsList.join(' '));

}
friendMaintenance(["Mike, John, Eddie",

    "Blacklist Mike",

    "Error 0",

    "Report"]);