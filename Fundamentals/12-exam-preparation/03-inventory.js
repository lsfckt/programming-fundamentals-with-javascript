function inventory(commands) {

    const journal = commands.shift();
    const items = journal.split(', ');

    let index = 0;
    let currCommand = commands[index];
    index++;

    while (currCommand != 'Craft!') {
        const splitedCommands = currCommand.split(' - ')
        let [command, item] = splitedCommands;

        switch (command) {
            // •	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
            case 'Collect':
                if (!items.includes(item)) {
                    items.push(item);
                }
                break;
            // •	"Drop - {item}" - you should remove the item from your inventory if it exists.            
            case 'Drop':
                if (items.includes(item)) {
                    const itemIndex = items.indexOf(item);
                    items.splice(itemIndex, 1);
                }
                break;
            // •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one.
            // Otherwise, ignore the command.  
            case 'Combine Items':
                const [oldItem, newItem] = item.split(':');

                if (items.includes(oldItem)) {
                    const oldItemIndex = items.indexOf(oldItem);
                    items.splice(oldItemIndex + 1, 0, newItem);

                }
                break;
            // •	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.            
            case 'Renew':
                if (items.includes(item)) {
                    const indexOfChangingItem = items.indexOf(item);
                    const changePositionItem = items.splice(indexOfChangingItem, 1);
                    items.push(changePositionItem);
                }
                break;
        }

        currCommand = commands[index];
        index++;
    }

    //After receiving "Craft!" print the items in your inventory, separated by ", ".
    console.log(items.join(', '));

}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]

);