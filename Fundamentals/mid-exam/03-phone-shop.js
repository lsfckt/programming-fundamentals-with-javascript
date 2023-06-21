function phoneShop(commands) {

    const phoneList = commands.shift().split(', ');

    for (const line of commands) {
        let [currCommand, phone] = line.split(' - ')

        switch(currCommand) {
    // Add - {phone}":
    // Add the given phone to the storage.
    // If the phone already exists, you should skip this line.
            case 'Add':
                if (!phoneList.includes(phone)) {
                    phoneList.push(phone);
                }
                break;
    /* Remove - {phone}":
    Remove the phone from the storage if it exists.
    Otherwise, ignore the command */            
            case 'Remove':
                if (phoneList.includes(phone)) {
                    let indexOfPhone = phoneList.indexOf(phone);
                    phoneList.splice(indexOfPhone, 1);
                }
                break;
    /* Bonus phone - {oldPhone}:{newPhone}":
     If the old phone exists, add the new phone after the old one.
     Otherwise, ignore the command.  */   
            case 'Bonus phone':
                let [oldPhone, newPhone] = phone.split(':');

                if (phoneList.includes(oldPhone)) {
                    let indexOfOldPhone = phoneList.indexOf(oldPhone);
                    phoneList.splice(indexOfOldPhone + 1, 0, newPhone);
                }      
                break;
    /* Last - {phone}":
    If the given phone exists, you should change its position and put it last in your storage.
    Otherwise, ignore the command. */  
            case 'Last':
                if (phoneList.includes(phone)) {
                    let indexOfChange = phoneList.indexOf(phone);
                    const changingPhone = phoneList.splice(indexOfChange, 1);
                    phoneList.push(changingPhone);
                }
                break;
                default:
                    return phoneList.join(`, `)                   
        }

    }

}
let returned = phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",

"Last - SamsungA50",

"Add - MotorolaG5",

"End"]);
console.log(returned);