function twoCriteria(arr) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(arr.join('\n'));

}
twoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);