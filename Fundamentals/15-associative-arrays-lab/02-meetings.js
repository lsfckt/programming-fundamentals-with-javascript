function meetings(array) {

    const meetingsAppointments = {};

    for (const line of array) {
        let [weekday, name] = line.split(' ');

        if (meetingsAppointments.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetingsAppointments[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (const day in meetingsAppointments) {
        console.log(`${day} -> ${meetingsAppointments[day]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);