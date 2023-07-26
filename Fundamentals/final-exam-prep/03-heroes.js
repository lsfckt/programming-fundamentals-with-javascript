function heroesOfCode(input) {
    // On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. 
    const heroesNumber = input.shift();
    const heroesPoints = {};
    // On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format: 
    for (let i = 0; i < heroesNumber; i++) {
        const [currHero, hitPoints, manaPoints] = input.shift().split(' ');
        heroesPoints[currHero] = {
            hitPoints: Number(hitPoints),
            manaPoints: Number(manaPoints),
        }
    }
    // You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given. 
    let commandLine = input.shift();

    while (commandLine !== 'End') {
        let [action, ...args] = commandLine.split(' - ');
        // There are several actions that the heroes can perform:
        switch (action) {
            /*CastSpell – {hero name} – {MP needed} – {spell name}"
•	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
•	If the hero is unable to cast the spell print:
o	"{hero name} does not have enough MP to cast {spell name}!"
 */
            case 'CastSpell':
                const castSpellName = args[0];
                const mpNeeded = Number(args[1])
                const spellName = args[2];

                if (heroesPoints[castSpellName].manaPoints >= mpNeeded) {

                    heroesPoints[castSpellName].manaPoints -= mpNeeded;
                    console.log(`${castSpellName} has successfully cast ${spellName} and now has ${heroesPoints[castSpellName].manaPoints} MP!`);

                } else {
                    console.log(`${castSpellName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            /*TakeDamage – {hero name} – {damage} – {attacker}"
            •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
            o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
            •	If the hero has died, remove him from your party and print:
            o	"{hero name} has been killed by {attacker}!"
            */
            case 'TakeDamage':
                const takeDamageName = args[0];
                const damage = Number(args[1])
                const attacker = args[2];

                heroesPoints[takeDamageName].hitPoints -= damage;

                if (heroesPoints[takeDamageName].hitPoints > 0) {
                    console.log(`${takeDamageName} was hit for ${damage} HP by ${attacker} and now has ${heroesPoints[takeDamageName].hitPoints} HP left!`);
                } else {
                    console.log(`${takeDamageName} has been killed by ${attacker}!`);
                    delete heroesPoints[takeDamageName];
                }
                break;
            /**Recharge – {hero name} – {amount}"
            •	The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
            •	 Print the following message:
            o	"{hero name} recharged for {amount recovered} MP!"
             */
            case 'Recharge':
                const rechargeName = args[0];
                let rechargeAmount = Number(args[1]);
                const currMPoints = heroesPoints[rechargeName].manaPoints;

                heroesPoints[rechargeName].manaPoints += rechargeAmount;

                if (heroesPoints[rechargeName].manaPoints > 200) {
                    heroesPoints[rechargeName].manaPoints = 200;
                    rechargeAmount = 200 - currMPoints;
                }
                console.log(`${rechargeName} recharged for ${rechargeAmount} MP!`);
                break;
            /**Heal – {hero name} – {amount}"
        •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).
        •	 Print the following message:
        o	"{hero name} healed for {amount recovered} HP!
         */
            case 'Heal':
                const healName = args[0];
                let healAmount = Number(args[1]);
                const currHPoints = heroesPoints[healName].hitPoints;

                heroesPoints[healName].hitPoints += healAmount;

                if (heroesPoints[healName].hitPoints > 100) {
                    heroesPoints[healName].hitPoints = 100;
                    healAmount = 100 - currHPoints;
                }
                console.log(`${healName} healed for ${healAmount} HP!`);
                break;
        }

        commandLine = input.shift();
    }
    /**•	Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
"{hero name}
  HP: {current HP}
  MP: {current MP}"
*/
    for (const member in heroesPoints) {
        console.log(`${member}\n  HP: ${heroesPoints[member].hitPoints}\n  MP: ${heroesPoints[member].manaPoints}`);
    }
}
heroesOfCode([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);    