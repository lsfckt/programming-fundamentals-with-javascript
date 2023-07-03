function hashTag(sentence) {
    // Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
    let splited = sentence.split(' ');

    for (word of splited) {

        if (word.startsWith('#') && word.length > 1) {
            let lowerCase = word
                .substring(1)
                .toLowerCase();
                
            if (lowerCase.charCodeAt() > 96 && lowerCase.charCodeAt() < 123) {
                console.log(word.substring(1));
            }
        }
    }
}
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');