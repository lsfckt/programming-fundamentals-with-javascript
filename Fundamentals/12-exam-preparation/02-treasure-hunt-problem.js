function treasureProblem(commands) {

    let treasureChest = commands.shift().split('|');
    let index = 0;
    let currCommand = commands[index];

    while (currCommand !== "Yohoho!") {
        if (currCommand.includes('Loot')) {

            let currLoot = currCommand.split(' ').splice(1);

            for (let i = 0; i < currLoot.length; i++) {
                if (!treasureChest.includes(currLoot[i])) {
                    treasureChest.unshift(currLoot[i]);
                }
            }

        } else if (currCommand.includes('Drop')) {

            let currDropCommand = currCommand.split(' ');
            let dropIndex = Number(currDropCommand.splice(1));

            if (dropIndex < 0 || dropIndex > treasureChest.length) {
                currCommand = commands[index];
                index++;
                continue;
            } else {
                let removedLoot = treasureChest.splice(dropIndex, 1);
                let stringToAdd = removedLoot.join(' ');
                treasureChest.push(stringToAdd);
            }

        } else if (currCommand.includes('Steal')) {

            let currStealCommand = currCommand.split(' ');
            let countOfSteals = Number(currStealCommand.splice(1));

            let stealedLoots = treasureChest.splice(-countOfSteals);
            console.log(stealedLoots.join(', '));
        }

        currCommand = commands[index];
        index++;
    }

    if (treasureChest.length !== 0) {
        
        let stringOfTreasureItems = treasureChest.reduce((acc, num) => acc + num)
        let sumOfTreasureItems = stringOfTreasureItems.length;
        let avgTreasureGain = (sumOfTreasureItems / (treasureChest.length)).toFixed(2);
        console.log(`Average treasure gain: ${avgTreasureGain} pirate credits.`);

    } else {
        console.log("Failed treasure hunt.");
    }
}
