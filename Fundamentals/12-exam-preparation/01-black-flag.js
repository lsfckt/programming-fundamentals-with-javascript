function blackFlag(commands) {

    let daysOfPiraing = Number(commands.shift());
    let plunderPerDay = Number(commands.shift());
    let expectedPlunder = Number(commands.shift());

    let totalPlunder = 0;

    for (let i = 1; i <= daysOfPiraing; i++) {
        if (i % 3 === 0) {
            totalPlunder += plunderPerDay + (plunderPerDay * 0.5); // every third day they have additional plunder, which is 50 % from daily plunder
        } else {
            totalPlunder += plunderPerDay;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.7; // everi fifth day, they lose 30 % from totalPlunder
        }
    }

    if (totalPlunder >= expectedPlunder) {
        return `Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`;
    } else {
        let percentageLeft = totalPlunder / expectedPlunder * 100; // how much percent left to reach the target
        return `Collected only ${percentageLeft.toFixed(2)}% of the plunder.`
    }
}
let returned = blackFlag([
    "10",
    "20",
    "380"
]);
console.log(returned);