function movies(commands) {

    let movieInfo = [];

    for (const command of commands) {
        if (command.includes('addMovie')) {
            let name = command.split('addMovie ')[1]; //тъй като сплитваме първия елемент на стринга, 'name' връща масив, на който първия елемент е празен стринг.
            movieInfo.push({ name });
        } else if (command.includes('directedBy')) {
            let [movieName, director] = command.split(' directedBy ');
            let findedMovie = movieInfo.find(el => el.name === movieName); // find намира първото съвпадение в масив, като търси по азбучен ред и връща този елемент, ако не го намери връща undifined

            if (findedMovie) { // ако филма го има, към обекта в който е филмът (на съответния индекс) добавяме режисьора.
                findedMovie.director = director;
            }
        } else { // if (command.includes('onDate'))
            let [movieName, date] = command.split(' onDate ');
            let findedMovie = movieInfo.find(el => el.name === movieName);

            if (findedMovie) {
                findedMovie.date = date;
            }
        }
    }

    for (const obj of movieInfo) { //минаваме по обектите в масива и ако имат име, режисьор и дата, печатаме в JSON
        if (obj.name && obj.director && obj.date) {
            console.log(JSON.stringify(obj));
        }
    }
    
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
);