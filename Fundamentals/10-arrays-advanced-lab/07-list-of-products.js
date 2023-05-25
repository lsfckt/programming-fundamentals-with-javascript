function listOfProducts(products) {

    let orderedProducts = products.sort()
    let orderList = 1;
    for (let i = 0; i < products.length; i++) {
        console.log(`${orderList}.${orderedProducts[i]}`);
        orderList++;
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);