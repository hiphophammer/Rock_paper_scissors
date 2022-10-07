/*
    return: rock/paper/scissors in number
    Rock: 0
    Paper: 1
    Scissors: 2
*/
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());