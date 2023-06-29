function ladyBugs(commands) {

    let fieldSize = new Array(commands[0]).fill(0); // създаваме нов масив и го запълваме с нули;
    let ladyBugsIndexes = commands[1].split(' '); // сплитваме на кои позиции трябва да има калинки;

    for (position of ladyBugsIndexes) {

        if (position >= 0 && position < fieldSize.length) { // ако позициите са валидни
            fieldSize[position] = 1;                        // на всяка позиция поставяме калинка (1)
        }
    }

    for (let i = 2; i < commands.length; i++) {
        let splitedCommands = commands[i].split(' ');
        let [currPosition, direction, flyLength] = splitedCommands;
        currPosition = Number(currPosition);
        flyLength = Number(flyLength);

        if (direction === 'right') {
            if (fieldSize[currPosition] === 1) {
                fieldSize[currPosition] = 0; // ако настоящата позиция във полето е 1, калинката отлита и позицията остава празна (0)
                currPosition += flyLength; // преминава на следващата позиция

                while (fieldSize[currPosition] === 1) { //докато на всяка следваща позицията има калинка (1)
                    currPosition += flyLength;          // преминавай на следващата

                    if (currPosition > fieldSize.length) { // Ако излезе извън полето, калинката отлита извън него
                        break;
                    }
                }

                if (fieldSize[currPosition] === 0) { // ако позицията в полето е 0 т.е. няма калинка, калинката се настанява там и става 1
                    fieldSize[currPosition] = 1;
                }
            }
        } else { // ако посокоата е ляво
            if (fieldSize[currPosition] === 1) {
                fieldSize[currPosition] = 0;
                currPosition -= flyLength;

                while (fieldSize[currPosition] === 1) {
                    currPosition -= flyLength;
                    if (currPosition < 0) { // ако излезе извън полето
                        break;
                    }
                }

                if (fieldSize[currPosition] === 0) {
                    fieldSize[currPosition] = 1;
                }
            }
        }
    }
    console.log(fieldSize.join(' '));
}
ladyBugs([3, '0 1',
    '0 right 1',
    '2 right 1']
); 