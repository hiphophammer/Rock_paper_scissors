/*
    return: rock/paper/scissors in number
    Rock: 0
    Paper: 1
    Scissors: 2
*/
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

/*
    playerSelection: player choice in string (case insensitive)
    computerSelection: computer choice in number
    Rock: 0
    Paper: 1
    Scissors: 2
    return: result string
*/
function playGame(playerSelection, computerSelection) {
    // make user input case insensitive
    playerSelection = playerSelection.toUpperCase();
    // player choice === ROCK
    if (playerSelection === "ROCK") {
        switch(computerSelection) {
            case 0: // ROCK VS ROCK
                return "Rock Vs. Rock -- tie!";
            case 1: // ROCK VS PAPER
                return "Rock Vs. Paper -- you lose!";
            default: // ROCK VS SCISSORS
                return "Rock Vs. Scissors -- you win!";
        }
    }
    // player choice === PAPER 
    else if (playerSelection === "PAPER") {
        switch(computerSelection) {
            case 0: // PAPER VS ROCK
                return "Paper Vs. Rock -- you win!";
            case 1: // PAPER VS PAPER
                return "Paper Vs. Paper -- tie!";
            default: // PAPER VS SCISSORS
                return "Paper Vs. Scissors -- you lose!";
        }
    }
    // player choice === SCISSORS
    else {
        switch(computerSelection) {
            case 0: // SCISSORS VS ROCK
                return "Scissors Vs. Rock -- you lose!";
            case 1: // SCISSORS VS PAPER
                return "Scissors Vs. Paper -- you win!";
            default: // SCISSORS VS SCISSORS
                return "Scissors Vs. Scissors -- tie!";
        }
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));