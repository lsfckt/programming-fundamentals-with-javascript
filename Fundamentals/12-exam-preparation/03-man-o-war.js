function manOWar(startCommands) {

    let pirateStatus = startCommands.shift().split('>').map(Number);
    let warShipStatus = startCommands.shift().split('>').map(Number);
    let maxHealth = Number(startCommands.shift());
    let startCommandsLength = startCommands.length;

    for (let i = 0; i < startCommandsLength; i++) {
        let commands = startCommands[i].split(' ');
        let currCommand = commands.shift();

        if (currCommand === 'Retire') {
            break;
        }

        switch (currCommand) {

            case 'Fire':
                let fireIndex = Number(commands[0])
                let fireDamage = Number(commands[1]);

                if (fireIndex < 0 || fireIndex >= warShipStatus.length) {
                    continue;
                } else {
                    warShipStatus[fireIndex] -= fireDamage;

                    if (warShipStatus[fireIndex] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;

            case 'Defend':
                let startIndex = Number(commands[0]);
                let endIndex = Number(commands[1]);
                let defendDamage = Number(commands[2]);

                if (startIndex < 0 || startIndex >= pirateStatus.length || endIndex < 0 || endIndex >= pirateStatus.length) {
                    continue;
                } else {
                    for (let j = startIndex; j <= endIndex; j++) {
                        pirateStatus[j] -= defendDamage;

                        if (pirateStatus[j] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;

            case 'Repair':
                let repairIndex = Number(commands[0]);
                let health = Number(commands[1]);

                if (repairIndex < 0 || repairIndex >= pirateStatus.length) {
                    continue;
                } else {
                    pirateStatus[repairIndex] += health;
                }

                if (pirateStatus[repairIndex] > maxHealth) {
                    pirateStatus[repairIndex] = maxHealth;
                }
                break;

            case 'Status':
                let twentyPercent = maxHealth * 0.20;
                let repairCount = 0;

                for (let count = 0; count < pirateStatus.length; count++) {
                    let currSection = pirateStatus[count];
                    if (currSection < twentyPercent) {
                        repairCount++;
                    }
                }
                console.log(`${repairCount} sections need repair.`);
                break;
        }
    }

    let pirateShipSum = pirateStatus.reduce((a, b) => a + b);
    let warShipSum = warShipStatus.reduce((a, b) => a + b);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])



