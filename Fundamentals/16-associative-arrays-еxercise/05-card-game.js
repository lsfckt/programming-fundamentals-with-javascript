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

    for (const line in obj) {
        let sum = 0;

        obj[line].forEach(el => {

            let power = 0;
            let type = 0;

            if (el.length !== 3) {
                [power, type] = el.split('');
            } else {
                [firstPower, secPower, type] = el.split('');
                power = firstPower + secPower;
            }

            switch (power) {
                case 'J': power = 11;
                    break;
                case 'Q': power = 12;
                    break;
                case 'K': power = 13;
                    break;
                case 'A': power = 14;
                    break;
            }

            power = Number(power);

            switch (type) {
                case 'S': type = 4;
                    break;
                case 'H': type = 3;
                    break;
                case 'D': type = 2;
                    break;
                case 'C': type = 1;
                    break;
            }

            if (obj[line] !== 0) {
                obj[line] = 0;
            }

            sum += power * type;
        });

        obj[line] = sum;
        console.log(`${line}: ${obj[line]}`);

    }
}
cardGame([
'John: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'John: JD, JD, JD, JD'
]
);