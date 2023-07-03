function revealWords(words, templates) {

    let splitedWords = words.split(', ');
    let splitedTemplates = templates.split(' ');

    for (let word of splitedWords) {

        for (let template of splitedTemplates) {

            if (template.startsWith('*')) {
                
                if (word.length === template.length) {
                    let replaced = template.replace(template, word);
                    splitedTemplates.splice(splitedTemplates.indexOf(template), 1, replaced);
                }
            }
        }
    }
    console.log(splitedTemplates.join(' '));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);
