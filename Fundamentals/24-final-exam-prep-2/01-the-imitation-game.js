function theImitationGame(input) {
    // On the first line of the input you will receive the encrypted message.
    let copyedInput = input.slice();
    let encryptedMessage = copyedInput.shift();
    
    /*. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be 
    performed upon the concealed message to interpret it and reveal its true content.*/
    let currLine = copyedInput.shift();
    while (currLine !== 'Decode') {
        let [currCommand, ...args] = currLine.split('|');

        switch (currCommand) {
            /*•	Move {number of letters}
            o	Moves the first n letters to the back of the string. */
            case 'Move':
                let letters = encryptedMessage.substring(0, args);
                let cutedMessage = encryptedMessage.replace(letters, '');

                encryptedMessage = cutedMessage.concat(letters);
                break;
            /*•	Insert {index} {value}
           o	Inserts the given value before the given index in the string.*/
            case 'Insert':
                let [index, value] = [...args];
                let messageArr = encryptedMessage.split('');

                let firstPart = messageArr.slice(0, index);
                let secPart = messageArr.slice(index);

                firstPart.push(value);
                let newMessage = firstPart.concat(secPart);
                encryptedMessage = newMessage.join('');

                break;
            /*•	ChangeAll {substring} {replacement} 
            o	Changes all occurrences of the given substring with the replacement text.*/
            case 'ChangeAll':
                let [currSubstr, currReplacement] = [...args];

                while (encryptedMessage.includes(currSubstr)) {
                    encryptedMessage = encryptedMessage.replace(currSubstr, currReplacement);
                }

                break;
        }
        currLine = copyedInput.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
);