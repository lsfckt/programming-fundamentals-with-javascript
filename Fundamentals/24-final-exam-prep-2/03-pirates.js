function pirates(input) {

    let slicedInput = input.slice();
    let line = slicedInput.shift();
    let citiesInfo = {};

    // Until the "Sail" command is given, you will be receiving:
    while (line !== 'Sail') {

        //	You and your crew have targeted cities, with their population and gold, separated by "||".    
        let [currCity, currPopulation, currGold] = line.split('||');

        if (!citiesInfo.hasOwnProperty(currCity)) {
            citiesInfo[currCity] = {
                population: Number(currPopulation),
                gold: Number(currGold)
            }
        } else { // If you receive a city that has already been received, you have to increase the population and gold with the given values.
            citiesInfo[currCity].population += Number(currPopulation);
            citiesInfo[currCity].gold += Number(currGold);
        }
        line = slicedInput.shift();
    }
    line = slicedInput.shift();

    //After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
    while (line !== 'End') {
        let [command, ...args] = line.split('=>');

        switch (command) {
            case 'Plunder':

                // Plunder=>{town}=>{people}=>{gold}"
                let [plunderTown, plunderPeople, plunderGold] = [...args];

                // You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold.
                citiesInfo[plunderTown].gold -= Number(plunderGold)
                citiesInfo[plunderTown].population -= Number(plunderPeople);

                console.log(`${plunderTown} plundered! ${plunderGold} gold stolen, ${plunderPeople} citizens killed.`);

                // If any of those two values (population or gold) reaches zero, the town is disbanded.
                if (citiesInfo[plunderTown].population <= 0 || citiesInfo[plunderTown].gold <= 0) {

                    // You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
                    delete citiesInfo[plunderTown];
                    console.log(`${plunderTown} has been wiped off the map!`);
                }
                break;

            // Prosper=>{town}=>{gold}
            case 'Prosper':
                let prosperTown = args[0];
                let prosperGold = Number(args[1]);

                // There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold. 
                if (prosperGold >= 0) {
                    citiesInfo[prosperTown].gold += Number(prosperGold);
                    console.log(`${prosperGold} gold added to the city treasury. ${prosperTown} now has ${citiesInfo[prosperTown].gold} gold.`);
                } else { // The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
                    console.log('Gold added cannot be a negative number!');
                }
        }

        line = slicedInput.shift();
    }
    // •	After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:
    let citiesArr = Object.keys(citiesInfo);
    if (citiesArr.length !== 0) {
        console.log(`Ahoy, Captain! There are ${citiesArr.length} wealthy settlements to go to:`);

        for (let args in citiesInfo) {
            console.log(`${args} -> Population: ${citiesInfo[args].population} citizens, Gold: ${citiesInfo[args].gold} kg`);
        }

    } else { // If there are no settlements left to plunder, print:
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])

    ;