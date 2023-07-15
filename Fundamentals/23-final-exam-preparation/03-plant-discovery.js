function plantDiscovery(input) {

    let num = Number(input.shift());
    let obj = {};

    // On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}". 
    // Store that information because you will need it later. If you receive a plant more than once, update its rarity.
    for (let i = 0; i < num; i++) {
        let line = input
            .shift()
            .split('<->');
        let [plant, rarity] = [...line];

        obj[plant] = {
            rarity: rarity,
            ratings: []
        }
    }

    //After that, until you receive the command "Exhibition", you will be given some of these commands
    let currCommand = input.shift();
    while (currCommand !== 'Exhibition') {
        // Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
        if (currCommand.startsWith('Rate')) {
            let rate = currCommand.split(': '); //['Rate', 'Woodii - 10']
            let [plant, rating] = rate[1].split(' - '); //['Woodii', '10']

            if (!obj.hasOwnProperty(plant)) {
                console.log('error');
            } else {
                obj[plant].ratings.push(rating);
            }
            // Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
        } else if (currCommand.startsWith('Update')) {
            let update = currCommand.split(': ');
            let [plant, newRarity] = update[1].split(' - ');

            if (!obj.hasOwnProperty(plant)) {
                console.log('error');
            } else {
                obj[plant].rarity = newRarity;
            }

        } else {
            let [command, plant] = currCommand.split(': ');

            if (!obj.hasOwnProperty(plant)) {
                console.log('error');
            } else {
                obj[plant].ratings = [];
            }
        }
        currCommand = input.shift();
    }
    console.log('Plants for the exhibition:');

    for (const plant in obj) {
        let avrRating = 0;
        let ratingsSum = 0;

        if (obj[plant].ratings.length !== 0) { // if ratings array is empty print avrRating = 0;
            ratingsSum = obj[plant].ratings
                .map(x => Number(x))
                .reduce((a, b) => a + b);
            avrRating = ratingsSum / obj[plant].ratings.length;
        }
        console.log(`- ${plant}; Rarity: ${obj[plant].rarity}; Rating: ${avrRating.toFixed(2)}`);
    }
}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
    ;
