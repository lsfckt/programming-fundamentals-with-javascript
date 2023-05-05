function vacation(peopleCount, groupType, dayOfWeek) {

    let price = 0;

    switch (dayOfWeek) {
        case 'Friday':
            if (groupType === 'Students' ) {
                price = 8.45;
            } else if (groupType === 'Business') {
                price = 10.90;
            } else if (groupType === 'Regular') {
                price = 15;
            } break;
        case 'Saturday':
            if (groupType === 'Students') {
                price = 9.80;
            } else if (groupType === 'Business') {
                price = 15.60;
            } else if (groupType === 'Regular') {
                price = 20;
            } break;
        case 'Sunday':
            if (groupType === 'Students') {
                price = 10.46;
            } else if (groupType === 'Business') {
                price = 16;
            } else if (groupType === 'Regular') {
                price = 22.50;
            } break;
    }

    if (groupType === 'Students' && peopleCount >= 30) {
        price *= 0.85;
    } else if (groupType === 'Business' && peopleCount >= 100) {
        peopleCount -= 10;
    } else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        price *= 0.95
    }

    let totalPrice = peopleCount * price;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(15,

    "Regular",

    "Sunday")