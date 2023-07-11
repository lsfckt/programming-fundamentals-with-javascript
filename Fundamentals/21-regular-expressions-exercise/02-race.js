function race(input) {
    // On the first line, you will be given a list of participants separated by ", ".
    let regName = /[A-Za-z]+/g;
    let regDistance = /\d/g;

    let participants = input.shift();
    // On the next few lines until you receive a line "end of race" you will be given some info which will be some alphanumeric characters.
    let currCommand = input.shift();
    let ranking = {};

    while (currCommand !== 'end of race') {
        let racerName = currCommand
            .match(regName)
            .join('');
        // Store the information about the person only if the list of racers contains the name of the person. 
        let racerDistance = currCommand
            .match(regDistance)
            .map(x => Number(x))
            .reduce((a, b) => a + b);

        if (participants.includes(racerName)) {

            if (ranking.hasOwnProperty(racerName)) {
                ranking[racerName] += racerDistance
            } else {
                ranking[racerName] = racerDistance;
            }
        }

        currCommand = input.shift();
    }
    // At the end print the top 3 racers ordered by distance in descending in the format:
    let entries = Object
        .entries(ranking)
        .sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${entries[0][0]}\n2nd place: ${entries[1][0]}\n3rd place: ${entries[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
);