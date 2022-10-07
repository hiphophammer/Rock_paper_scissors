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
            default: // 
                return "Rock Vs. Scissors -- you win!";
        }
    }
    // player choice === PAPER 
    else if (playerSelection === "PAPER") {

    }
    // player choice === SCISSORS
    else {

    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));