function passReset(input) {
    /* First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a 
    single space */
    let lines = input.slice();
    let pass = lines.shift();
    let currLine = lines.shift();

    while (currLine !== 'Done') {
        let [currCommand, ...args] = currLine.split(' ');
        lengthOfPass = pass.length;
        // TakeOdd"
        // Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
        switch (currCommand) {
            case 'TakeOdd':
                let raw = '';

                for (let i = 0; i < lengthOfPass; i++) {
                    if (i % 2 !== 0) {
                        raw += pass[i];
                    }
                }

                pass = raw;
                console.log(pass);
                break;
            // Cut {index} {length}"
            // Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the
            // password on the console.
            case 'Cut':
                const index = Number(args[0]);
                const cutLength = Number(args[1]);

                let substrCut = pass.substring(index, index + cutLength);
                pass = pass.replace(substrCut, '');

                console.log(pass);
                break;
            // Substitute {substring} {substitute}"
            // If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
            // If it doesn't, prints "Nothing to replace!".
            case 'Substitute':
                let [substr, substitute] = [...args];

                if (pass.includes(substr)) {
                    while (pass.includes(substr)) {
                        pass = pass.replace(substr, substitute);
                    }
                    console.log(pass);

                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }

        currLine = lines.shift();
    }

    console.log(`Your password is: ${pass}`);
}
passReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);