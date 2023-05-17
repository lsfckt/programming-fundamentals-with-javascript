function main() {

    function playerChoice(playerTurn) {

        const rock = 'Rock';
        const paper = 'Paper';
        const scissor = 'Scissors';

        if (playerTurn == 'r' || playerTurn == 'rock') {
            playerTurn = rock;
        } else if (playerTurn == 'p' || playerTurn == 'paper') {
            playerTurn = paper;
        } else if (playerTurn == 's' || playerTurn == 'scissors') {
            playerTurn = scissor;
        } else {
            console.log('Invalid Input. Try Again...');
        }
    }

    function computerChoice() {
        return computerRandomNumber = Math.floor(Math.random() * 3) + 1; 
    }

    function computerTurn() {
        computerChoice();
        let computerTurn = '';

        switch (computerRandomNumber) {
            case 1:
                computerTurn = 'Rock';
                break;
            case 2:
                computerTurn = 'Paper';
                break;
            case 3:
                computerTurn = 'Scissors';
                break;
        }
        console.log(`Computer choses ${computerTurn}`);
    }
playerChoice();
computerTurn();
}
main()

