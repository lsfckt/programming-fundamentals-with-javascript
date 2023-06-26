function partyTime(guests) {

    const comingGuest = {
        vipList: [],
        regularList: [],
        comeGuests: [],
    };

    let guestList = guests.shift();

    while (guestList != 'PARTY') {
        if (isNaN(guestList[0])) {
            comingGuest.vipList.push(guestList);
        } else {
            comingGuest.regularList.push(guestList);
        }
        guestList = guests.shift();
    }

    let allGuest = comingGuest.regularList.concat(comingGuest.vipList);
    let guestCount = 0;
    guests.forEach(currGuest => {

        if (allGuest.includes(currGuest)) {
            guestCount++;

            if (guestCount === 1) {
                allGuest.splice(allGuest.indexOf(currGuest), 1);
            } else {
                comingGuest.comeGuests.push(currGuest)
                let cameGuests = allGuest.splice(allGuest.indexOf(currGuest), 1);
            }
        };
    });
    console.log(allGuest.length);

    allGuest.forEach(uncoming => {
        console.log(uncoming);
    })
}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);