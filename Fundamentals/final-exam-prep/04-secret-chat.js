function secretChat(input) {
    // On the first line of the input, you will receive the concealed message.     
    /**After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed 
     * upon the concealed message to interpret it and reveal its actual content */
    let slicedInput = input.slice();
    let message = slicedInput.shift();
    let line = slicedInput.shift();

    while (line !== 'Reveal') {
        // . There are several types of instructions, split by ":|:"
        let [command, ...args] = line.split(':|:');

        /**•	"InsertSpace:|:{index}":
        o	Inserts a single space at the given index. The given index will always be valid.
         */
        switch (command) {
            case 'InsertSpace':
                let index = Number(args[0]);
                let leftSide = message.substring(0, index);
                let rightSide = message.substring(index);

                message = leftSide.concat(' ', rightSide)
                console.log(message);
                break;
            /**•	"Reverse:|:{substring}":
            o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
            o	If not, print "error".
            o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
             */
            case 'Reverse':
                let substr = args[0];

                if (message.includes(substr)) {
                    message = message.replace(substr, '');
                    substr = substr
                        .split('')
                        .reverse()
                        .join('');

                    message = message.padEnd((message.length + substr.length), substr);
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            /** •	"ChangeAll:|:{substring}:|:{replacement}":
        o	Changes all occurrences of the given substring with the replacement text.
         */
            case 'ChangeAll':
                let substrToChange = args[0];
                let replacement = args[1];

                while (message.includes(substrToChange)) {
                    message = message.replace(substrToChange, replacement);
                }
                console.log(message);
                break;
        }

        line = slicedInput.shift();
    }
    /**•	After each set of instructions, print the resulting string. 
    •	After the "Reveal" command is received, print this message:
    "You have a new text message: {message}"
     */
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);