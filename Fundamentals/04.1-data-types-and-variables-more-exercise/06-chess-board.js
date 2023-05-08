function chessBoard(number) {

    let sizeBoard = Number(number);
    let currColour = 'black';
    let previousColour = '';
    console.log('<div class="chessboard">');

    for (let row = 1; row <= sizeBoard; row++) {
        console.log('   <div>');

        for (let columns = 1; columns <= sizeBoard; columns++) {
            console.log(`       <span class="${currColour}"></span>`);

            previousColour = currColour;
            currColour = previousColour === 'black' ? 'white' : 'black';
        }

        console.log('   </div>');
        
        if (sizeBoard % 2 === 0) {
            previousColour = currColour;
            currColour = previousColour === 'black' ? 'white' : 'black';
        }
    }
    console.log('</div>');
}
chessBoard(3)