function store(currStock, orderedProducts) {

    const storage = {};

    for (let index = 0; index < currStock.length; index += 2) {
        const currProduct = currStock[index];
        storage[currProduct] = Number(currStock[index + 1]);
    }

    for (let index = 0; index < orderedProducts.length; index += 2) {
        const currProduct = orderedProducts[index];
        if (!storage.hasOwnProperty(currProduct)) {
            storage[currProduct] = 0;
        }
        storage[currProduct] += Number(orderedProducts[index + 1]);
    }

    for (const product in storage) {
        console.log(`${product} -> ${storage[product]}`);
    }
}
store(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);