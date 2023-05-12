function dayOfWeek(number) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (number >= 1 && number <= 7) {

        for (let i = 0; i <= days.length; i++) {
            let currDay = days[i];

            if (number === (i + 1)) {
                console.log(currDay);
            }
        }

    } else {
        console.log('Invalid day!');
    }

}
dayOfWeek(3)