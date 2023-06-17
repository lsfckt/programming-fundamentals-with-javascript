function muOnline(rooms) {

    let initialHealth = 100;
    let initialBitcoin = 0;
    let bestRoom = 0;

    const commands = rooms.split('|');
    for (const command of commands) {
        bestRoom++;

        const splitedCommands = command.split(' ');
        const currCommand = splitedCommands[0];
        const number = Number(splitedCommands[1]);


        if (currCommand === 'potion') {
            let healedNum = 0;
            if ((initialHealth + number) <= 100) {
                initialHealth += number;
                healedNum = number;
            } else {
                healedNum = 100 - initialHealth;
                initialHealth = 100;
            }
            console.log(`You healed for ${healedNum} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        }

        if (currCommand === 'chest') {
            initialBitcoin += number;
            console.log(`You found ${number} bitcoins.`);
        }

        if (currCommand !== 'potion' && currCommand !== 'chest') {
            initialHealth -= number;
            if (initialHealth > 0) {
                console.log(`You slayed ${currCommand}.`);
            } else {
                console.log(`You died! Killed by ${currCommand}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }

    }

    if (initialHealth > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${initialBitcoin}`);
        console.log(`Health: ${initialHealth}`);
    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");