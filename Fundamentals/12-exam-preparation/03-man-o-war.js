function manOWar(startCommands) {

    let pirateStatus = startCommands.shift().split('>').map(Number);
    let warShipStatus = startCommands.shift().split('>').map(Number);
    const maxHealth = Number(startCommands.shift());
    let pirateHealth = pirateStatus.reduce((a, b) => a + b);
    let warShipHealth = warShipStatus.reduce((a, b) => a + b);
    let startCommandsLength = startCommands.length;
    
    for (let i = 0; i < startCommandsLength; i++) {
        let commands = startCommands[i].split(' ');
        let currCommand = commands.shift();
        
//•	"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section.
// Check if the index is valid and if not, skip the command. 
//If the section breaks (health <= 0) the warship sinks, print the following and stop the program: "You won! The enemy ship has sunken."        
        switch (currCommand) {
            case 'Fire': 
            let currIndex = Number(commands[0])
            let currDamage = Number(commands[1]);
            console.log(currIndex);
        }

    }

}
manOWar([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
])
