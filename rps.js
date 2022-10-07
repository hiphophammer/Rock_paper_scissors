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
    
    return "";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));