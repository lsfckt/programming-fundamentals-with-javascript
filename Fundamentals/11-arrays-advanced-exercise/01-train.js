function train(arr) {

    let passengersInWagon = arr.shift().split(' ').map(Number); //shift first element from the input, split to array and parsed elements to Numbers
    let maxCapacity = Number(arr.shift()); //shift second element

    // add passengers
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let command = arr[i];

        if (command.includes('Add')) {
            let newWagon = command.split(' '); // split 'add' & 10
            passengersInWagon.push(newWagon[1]); // get 10 and push at the end
        } else {
            for (let j = 0; j < passengersInWagon.length; j++) { //loop through the array
                let currPassengers = passengersInWagon[j]; 
                command = Number(arr[i]);
                if ((currPassengers + command) <= maxCapacity) { 
                    currPassengers += command;
                    passengersInWagon.splice([j], 1, currPassengers); // replaced only curr el at curr index with new sum
                    break; // incremate first loop
                }
            }
        }
    }
    console.log(passengersInWagon.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);