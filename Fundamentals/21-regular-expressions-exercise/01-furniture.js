function furniture(input) {

    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d[/.]+)!(?<quantity>\d+)/g;

    let furnitureNames = [];
    let totalPrice = 0;

    let index = 0;
    let currLine = input[index];
    index++;

    while (currLine !== "Purchase") {
        let validFurniture = pattern.exec(input);

        if (validFurniture === null) {
            break;
        }

        furnitureNames.push(validFurniture.groups['furniture']);

        let currPrice = Number(validFurniture.groups['price']);
        let currQuantity = Number(validFurniture.groups['quantity']);

        totalPrice += currPrice * currQuantity;

        currLine = input[index];
        index++;
    }

    if (furnitureNames.length !== 0) {
        console.log(`Bought furniture:\n${furnitureNames.join('\n')}`);
        console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    } else {
        console.log('Bought furniture:');
        console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    }
}
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);