function dungeonestDark(rooms) {

    let health = 100;
    let coins = 0;
    let bestRoom = 0;

    let splitedRoom = rooms[0].split('|');
    for (const room of splitedRoom) {
        bestRoom++;
        let [command, number] = room.split(' ');
        number = Number(number);

        switch (command) {
            case 'potion':
                let healthed = 0;

            if ((health + number) <= 100) {
                health += number;
                healthed = number;
            } else {
                healthed = 100 - health;
                health = 100;
            }
            console.log(`You healed for ${healthed} hp.`);
            console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                health -= number;

                if (health > 0) {
                    console.log(`You slayed ${command}`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${bestRoom}`);
                    return;
                }
                break;
        }
    };

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

    /* If you managed to go through all the rooms in the dungeon, print on the next three lines:
"You've made it!"
"Coins: {coins}"
"Health: {health}"
 */

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]
);