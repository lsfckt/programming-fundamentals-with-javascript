function stringManipulator(input) {
    // First, you are going to receive the string, then commands
    let slicedInput = input.slice();
    let str = slicedInput.shift();
    let line = slicedInput.shift();
    // You will be receiving commands until the "End" command.

    while (line !== 'End') {
        let [command, ...args] = line.split(' ');

        switch (command) {
            /**Translate {char} {replacement}"
             * Replace all occurrences of the given char with the given replacement, then print the string. */
            case 'Translate':
                let char = args[0];
                let replacement = args[1];

                while (str.includes(char)) {
                    str = str.replace(char, replacement);
                }

                console.log(str);
                break;
            /**Includes {substring}"
             *  Check if the current string includes the given substring and print "True" or "False". */
            case 'Includes':
                let substr = args[0];
                let hasSubstr = str.includes(substr);

                if (hasSubstr) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            /**Start {substring}"
             *  Check if the current string starts with the given substring and print "True" or "False".  */
            case 'Start':
                let startSubstr = args[0];
                let hasStart = str.startsWith(startSubstr);

                if (hasStart) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            /**Lowercase" 
             * Make the whole string lowercased, then print it.  */
            case 'Lowercase':

                str = str.toLowerCase();
                console.log(str);

                break;
            // Find the index of the last occurrence of the given char, then print it.       
            case 'FindIndex':
                let charToFind = args[0];
                let findedIndex = str.lastIndexOf(charToFind);

                console.log(findedIndex);
                break;
            // Remove {startIndex} {count}"
            // Remove the given count of characters from the string, starting from the start index, then print it.
            case 'Remove':
                let startIndex = Number(args[0]);
                let count = Number(args[1]);

                let substrToRemove = str.substring(startIndex, (startIndex + count));
                str = str.replace(substrToRemove, '');

                console.log(str);
                break;
        }
        line = slicedInput.shift();
    }
}
stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
    ;