function emojiDetector(input) {
    // You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.
    let str = input.slice().join();
    const coolTreshold = str.match(/\d/g).reduce((a, b) => a * b);

    console.log(`Cool threshold: ${coolTreshold}`);

    let pattern = /(?<symbols>[:]{2}|[\*]{2})(?<name>[A-Z][a-z]{2,})\1/g;

    // You need to count all valid emojis in the text and calculate their coolness.
    // The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji.
    const emojiData = [...str.matchAll(pattern)];
    let emojiesCount = 0;
    let coolEmojies = [];

    emojiData.forEach(match => {
        emojiesCount++;
        let emojiCoolness = 0;
        let emoji = match[0];
        let currName = match.groups.name;

        for (const char of currName) {
            emojiCoolness += char.charCodeAt();
        }

        if (emojiCoolness >= coolTreshold) {
            coolEmojies.push(emoji)
        }
    });

    console.log(`${emojiesCount} emojis found in the text. The cool ones are:`);
    coolEmojies.forEach(emoji => {
        console.log(emoji);
    });
}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);