function replaceRepeatingChars(input) {

    let splited = input.split('');
    let output = '';

    for (let i = 0; i < splited.length; i++) {
        if (splited[i] !== splited[i + 1]) {
            output += splited[i];
        }
    }
    console.log(output);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');