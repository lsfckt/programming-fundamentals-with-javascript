function partyTime(guests) {

    let vipList = [];
    let regularList = [];

    let guestList = guests.shift();

    while (guestList != 'PARTY') {
        if (isNaN(guestList[0])) {
            regularList.push(guestList);
        } else {
            vipList.push(guestList);
        }
        guestList = guests.shift();
    }

    let allGuest = vipList.concat(regularList);

    guests.forEach(currGuest => {

        if (allGuest.includes(currGuest)) {
                allGuest.splice(allGuest.indexOf(currGuest), 1);
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