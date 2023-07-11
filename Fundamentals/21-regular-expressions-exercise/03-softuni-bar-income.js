function barIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[\d+[.]+)\$/gm
    let matched = [];

    let index = 0;
    let currLine = input[index];
    index++;

    let income = 0;

    while (currLine != 'end of shift') {
        currLine = pattern.exec(input);

        if (currLine === null) {
            break;
        }

        let customerName = currLine.groups['customer'];
        let product = currLine.groups['product'];
        let count = Number(currLine.groups['count']);
        let price = Number(currLine.groups['price']);

        let totalPrice = count * price;
        income += totalPrice;

        console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);

        currLine = input[index];
        index++;
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);