function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let shieldBrakes = 0;

    for (let i = 1; i <= lostFightsCount; i++) {

        let isHelmetBroken = false;
        let isSwordBroken = false;

        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
            isHelmetBroken = true;
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
            isSwordBroken = true;
        }
        if (isHelmetBroken && isSwordBroken) {
            totalExpenses += shieldPrice;
            shieldBrakes++;
            
        }
        if(shieldBrakes % 2 === 0 && shieldBrakes > 0) {
            totalExpenses += armorPrice;
            shieldBrakes = 0;
        }

    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}
gladiatorExpenses
    (
        23,
        12.50,
        21.50,
        40,
        200
        
    )