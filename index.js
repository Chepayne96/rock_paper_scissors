let choiceArr = ["rock", "paper", "scissor"];
// getComputerChoice --> randomly pick from list for the pc
let computerSelection = "";
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    let computerSelection = choiceArr[i];
        // console.log(computerSelection);
    return computerSelection.toLowerCase();
}
// Get the input from the player (prompt)
let playerSelection = "";
function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, Scissor: ");
    return playerSelection.toLowerCase();
}
// Compare the choice from player to pc to find winner
function playRound() {
    // for (i = 0; i <= 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        switch (playerSelection, computerSelection) {
            case playerSelection === 'rock' && computerSelection === 'rock':
                console.log('You have tied!!');
                break;
            case playerSelection === 'rock' && computerSelection === 'paper':
                console.log('You have lost. Paper beats Rock!!');
                break;
            case playerSelection === 'rock' && computerSelection === 'scissor':
                console.log('You have won. Rock beats Scissor!!');
                break;
            case playerSelection === 'paper' && computerSelection === 'rock':
                console.log('You have won. Paper beats Rock!!');
                break;
            case playerSelection === 'paper' && computerSelection === 'paper':
                console.log('You have tied!!');
                break;
            case playerSelection === 'paper' && computerSelection === 'scissor':
                console.log('You have lost. Scissor beats Paper!!');
                break;
            case playerSelection === 'scissor' && computerSelection === 'rock':
                console.log('You have lost. Rock beats Scissor!!');
                break;
            case playerSelection === 'scissor' && computerSelection === 'paper':
                console.log('You have won. Scissor beats Paper!!');
                break;
            case playerSelection === 'scissor' && computerSelection === 'scissor':
                console.log('You have tied!!');
                break;
        }
    // }
}
playRound();