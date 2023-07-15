function activationKeys(input) {
    
    let rawKey = input.shift();
    let slicedInput = input.slice();
    let currLine = slicedInput.shift();
/*After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be 
performed upon the raw activation key. */
    while (currLine !== 'Generate') {

        let [currCommand, ...arguments] = currLine.split(`>>>`);
        /* •	"Contains>>>{substring}":
    o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
    o	Otherwise, prints: "Substring not found! */
        if (currCommand === 'Contains') {
            if (rawKey.includes(arguments)) {
                console.log(`${rawKey} contains ${arguments}`);
            } else {
                console.log('Substring not found!');
            }
        }
    /* Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
        o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation 
        key.
        o	All given indexes will be valid.*/
        if (currCommand === 'Flip') {
            let [command, startIndex, endIndex] = [...arguments];

            let newStr = rawKey.substring(startIndex, endIndex);
            let slicedNewString = newStr.slice();

            command === 'Upper' ? slicedNewString = slicedNewString.toUpperCase() : slicedNewString = slicedNewString.toLowerCase();

            rawKey = rawKey.replace(newStr, slicedNewString);
            console.log(rawKey);
        }
    /* "Slice>>>{startIndex}>>>{endIndex}":
        o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
        o	Both indices will be valid. */
        if (currCommand === 'Slice') {
            let [startIndex, endIndex] = [...arguments];
            let deletedStr = rawKey.substring(startIndex, endIndex);

            rawKey = rawKey.replace(deletedStr, '');
            console.log(rawKey);

        }
        currLine = slicedInput.shift();
    }

    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
    ;