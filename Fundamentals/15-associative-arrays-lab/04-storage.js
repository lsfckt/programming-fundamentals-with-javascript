function storage(input) {

    let maped = new Map();

    input.forEach(line => {
        const [el, quantity] = line.split(' ');

        if (!maped.has(el)) {
            maped.set(el, quantity);
        } else {
            const oldQuantiy = maped.get(el);
            const sumQuantity = Number(oldQuantiy) + Number(quantity);
            maped.set(el, sumQuantity);
        }
    });

    for (const [el, quantity] of maped) {
        console.log(`${el} -> ${quantity}`);
    }
}
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']

);