function needForSpeed(input) {
    // On the first line of the standard input, you will receive an integer n – the number of cars that you can obtain.
    let copy = input.slice();
    let carsNumber = copy.shift();
    let carInfo = {};
    // On the next n lines, the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
    for (let i = 0; i < carsNumber; i++) {
        let [car, mileage, fuel] = copy.shift().split('|');

        carInfo[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
    }
    // Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
    while ((line = copy.shift()) != 'Stop') {
        let [command, ...args] = line.split(' : ');
        /**Drive : {car} : {distance} : {fuel}":
o	You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: 
"Not enough fuel to make that ride"
o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel,
 and print: 
"{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
 */
        switch (command) {
            case 'Drive':
                const driveCar = args[0];
                const distanceToDrive = Number(args[1]);
                const driveFuelNeeded = Number(args[2]);

                if (carInfo[driveCar].fuel >= driveFuelNeeded) {

                    carInfo[driveCar].mileage += distanceToDrive;
                    carInfo[driveCar].fuel -= driveFuelNeeded;

                    console.log(`${driveCar} driven for ${distanceToDrive} kilometers. ${driveFuelNeeded} liters of fuel consumed.`);
                } else {
                    console.log('Not enough fuel to make that ride');
                }
                //You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"            
                if (carInfo[driveCar].mileage >= 100000) {
                    delete carInfo[driveCar];
                    console.log(`Time to sell the ${driveCar}!`);
                }
                break;
            /**•	"Refuel : {car} : {fuel}":
        o	Refill the tank of your car. 
        o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is 
        required to fill it up. 
        o	Print a message in the following format: "{car} refueled with {fuel} liters"
         */
            case 'Refuel':
                const refuelCar = args[0];
                const refuelLiters = Number(args[1]);
                const currFuel = carInfo[refuelCar].fuel;

                carInfo[refuelCar].fuel += refuelLiters;

                if (carInfo[refuelCar].fuel > 75) {
                    carInfo[refuelCar].fuel = 75;
                }

                const refueled = carInfo[refuelCar].fuel - currFuel;
                console.log(`${refuelCar} refueled with ${refueled} liters`);
                break;
            /**Revert : {car} : {kilometers}":
        o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
        "{car} mileage decreased by {amount reverted} kilometers"
        o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
        DO NOT print anything.
         */
            case 'Revert':
                let revertCar = args[0];
                let kilometersToRevert = Number(args[1]);

                carInfo[revertCar].mileage -= kilometersToRevert;                

                if (carInfo[revertCar].mileage < 10000) {
                    carInfo[revertCar].mileage = 10000;
                } else {
                    console.log(`${revertCar} mileage decreased by ${kilometersToRevert} kilometers`);
                }
                break;
        }

    }
    /**Upon receiving the "Stop" command, you need to print all cars in your possession in the following format:
"{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
 */
    for (car in carInfo) {
        console.log(`${car} -> Mileage: ${carInfo[car].mileage} kms, Fuel in the tank: ${carInfo[car].fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);