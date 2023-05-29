function treasureProblem(commands) {

    let treasureChest = commands.shift().split('|');
    let index = 0;

    while (commands !== "Yohoho!") {
        if (commands[index].includes('Loot')) {

            let currLoot = commands[index].split(' ').splice(1);

            for (let i = 0; i < currLoot.length; i++) {
                if (!treasureChest.includes(currLoot[i])) {
                    treasureChest.unshift(currLoot[i]);
                }
            }
        }
        //	Remove the loot at the given position and add it at the end of the treasure chest. 

        if (commands[index].includes('Drop')) {
            let currDropCommand = commands[index].split(' ');
            let dropIndex = Number(currDropCommand.splice(1));

            if (dropIndex < -200 || dropIndex > 200) {
                continue;
            } else {
                let removedLoot = treasureChest.splice(dropIndex, 1);
                let stringToAdd = removedLoot.join(' ');
                treasureChest.push(stringToAdd);
            }
        }
        index++;
    }

}
treasureProblem([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
])
