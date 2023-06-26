function cardGame(input) {

    const obj = {};

    input.forEach(line => {
        let [player, cards] = line.split(': ');
        let splitedCards = cards.split(', ');

        if (obj[player] === undefined) {
            obj[player] = [];

           splitedCards.forEach(element => {
                if (!obj[player].includes(element)) {
                    obj[player].push(element);
                }
            });
        } else {
            splitedCards.forEach(element => {
                if (!obj[player].includes(element)) {
                    obj[player].push(element);
                }
            });
        }
   });
console.log(obj['Peter']);

}
cardGame([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'
]);