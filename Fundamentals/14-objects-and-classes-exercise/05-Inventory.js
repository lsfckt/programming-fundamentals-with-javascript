function inventory(data) {

    let heroData = [];

    data.forEach(line => {
        let splitedData = line.split(' / ');

        let hero = splitedData[0];
        let level = Number(splitedData[1]);
        let items = splitedData[2];

        heroData.push({ hero, level, items });
    })

    heroData.sort((a, b) => a.level - b.level); // sorted ascending by level
    heroData.forEach(print => {
        console.log(`Hero: ${print.hero}\nlevel => ${print.level}\nitems => ${print.items}`);
    });
}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);