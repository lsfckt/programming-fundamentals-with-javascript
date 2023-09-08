function mirrorWords(input) {
     // On the first line of the input, you will be given a text string.
     /**To win the competition, you have to find all hidden word pairs, read them, and mark the ones that are mirror images of each other */
     let pattern = /([@#]{1})(?<first>[A-Za-z]{3,})\1\1(?<sec>[A-Za-z]{3,})\1/g;


     /**If the second word, spelled backward, is the same as the first word and vice versa (casing matters!), they are a match, and you have to 
     store them somewhere. */
     let matched = input.join().matchAll(pattern);
     let mirrorWords = {};
     let validPairsCount = 0;

     for (currMatch of matched) {
          validPairsCount++;

          let firstWord = currMatch.groups['first'];
          let secondWord = currMatch.groups['sec'];
          let reversedWord = secondWord
               .split('')
               .reverse()
               .join('');

          if (firstWord === reversedWord) {
               mirrorWords[firstWord] = secondWord;
          }

     }
     //•	If you don`t find any valid pairs, print: "No word pairs found!"
     if (validPairsCount === 0) {
          console.log("No word pairs found!");
     } else {
          console.log(`${validPairsCount} word pairs found!`);
     }    // •	If you find valid pairs print their count: "{valid pairs count} word pairs found!"
     //•	If there are no mirror words, print: "No mirror words!"
     let keys = Object.keys(mirrorWords);
     let consoleWords = [];
     for (let match in mirrorWords) {
          consoleWords.push(`${match} <=> ${mirrorWords[match]}`)
     }

     if (keys.length === 0) {
          console.log("No mirror words!");
     } else {
          console.log("The mirror words are:");
          console.log(consoleWords.join(', '));

     }
}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);