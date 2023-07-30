function messageDecrypter(input) {
    /**On the first line, you will receive a number that indicates how many inputs you will receive on the following lines.  */
    let slicedInput = input.slice();
    let inputNumbers = slicedInput.shift();

    let pattern = /([$%])(?<tag>[A-Z][a-z]{2,})\1:\s{1}(?<nums>\[[0-9]+]\|)+/g;
    /**You must check if the message is valid, and if it is - decrypts it. If it isn't - print the following message:  
     * "Valid message not found!" */
    for (let line of slicedInput) {
        let match = line.match(pattern)

        if (match !== null && match[0] === line) {
            let splited = match.join('').split(': ');
            let currTag = splited[0];
            let nums = splited[1].split('|');
            let lastEl = nums.pop();

            if (nums.length > 3) {
                console.log('Valid message not found!');
            } else {
                let joined = nums.join('').split('[').join('').split(']');
                let lastEl = joined.pop();
                let numToNum = joined.map(x => Number(x));

                let decrMessage = '';
                for (currNum of numToNum) {
                    decrMessage += String.fromCharCode(currNum);
                }
                let printTag = '';
                if (currTag.includes('$')) {
                    printTag = currTag.split('$').join('');
                } else {
                    printTag = currTag.split('%').join('');
                }
                console.log(`${printTag}: ${decrMessage}`);
            }
            /**Decrypting a message means taking all numbers and turn them into ASCII symbols. After successful decrypt, print it in the following 
             * format: "{tag}: {decryptedMessage} */

        } else {
            console.log('Valid message not found!');
        }
    }
}
messageDecrypter(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])
    ;