function adAstra(input) {

    let pattern = /([|#]{1})(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[1-9]\d{0,3}|10000|0)\1/g;

    //Calculate the total calories of all food items and then determine how many days you can last with the food you have. 
    // Keep in mind that you need 2000kcal a day.
    let totalCalories = 0;
    const caloriesPerDay = 2000;
    let inputArrToStr = input.join('');
    let foodInfo = [...inputArrToStr.matchAll(pattern)];

    for (let match of foodInfo) {
        let currCalories = Number(match.groups.calories);
        totalCalories += currCalories;
    }

    let dayLast = totalCalories / caloriesPerDay;

    console.log(`You have food to last you for: ${Math.floor(dayLast)} days!`);

    for (let match of foodInfo) {
        console.log(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
);