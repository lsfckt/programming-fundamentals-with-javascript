function burgerBus(tour) {

    const citiesCount = tour.shift();
    let tourLength = tour.length;
    let totalProfit = 0;
    let cityCounter = 0;

    for (let i = 0; i < tourLength; i += 3) {
        cityCounter++;
        const currCity = tour[i];
        let moneyEarned = tour[i + 1];
        let expenses = tour[i + 2];


        if (cityCounter % 3 === 0 && cityCounter % 5 !== 0) {
            expenses *= 1.5;
        }

        if (cityCounter % 5 === 0) {
            moneyEarned *= 0.90;
        }

        let currProfit = moneyEarned - expenses;
        console.log(`In ${currCity} Burger Bus earned ${currProfit.toFixed(2)} leva.`);

        totalProfit += currProfit;

    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

}
burgerBus(["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"]);