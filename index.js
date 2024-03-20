let choiceArr = ["rock", "paper", "scissor"];
// getComputerChoice --> randomly pick from list for the pc
let computerSelection;
function getComputerChoice(computerSelection) {
    let i = Math.floor(Math.random() * 3);
     computerSelection = choiceArr[i];
        // console.log(computerSelection);
    return computerSelection.toLowerCase();
}


// Get the input from the player (prompt)
let playerSelection;
function getPlayerChoice(playerSelection) {
    playerSelection = prompt("Rock, Paper, Scissor: ");
    return playerSelection.toLowerCase();
}


// Compare the choice from player to pc to find winner
function playRound() {
    let cc = getComputerChoice();
    let pc = getPlayerChoice();
        // console.log(pc, cc);
    if (pc === 'rock' && cc === 'rock'){
        return('Tie');
    } else if (pc === 'paper' && cc === 'rock'){
        return('Winner');
    } else if (pc === 'scissor' && cc === 'rock'){
        return('Loser');
    } else if (pc === 'rock' && cc === 'paper'){
        return('Loser');
    } else if (pc === 'paper' && cc === 'paper'){
        return('Tie');
    } else if (pc === 'scissor' && cc === 'paper'){
        return('Winner');
    } else if (pc === 'rock' && cc === 'scissor'){
        return('Winner');
    } else if (pc === 'paper' && cc === 'scissor'){
        return('Loser');
    } else if (pc === 'scissor' && cc === 'scissor'){
        return('Tie');
    }
}

// playRound();

// Call playRound 5 times and keep score of who wins
function playGame() {
    let playerScore
    let computerScore
    for (i = 0; i < 5; i++){
        let round = playRound();
        if (round === 'Winner') {
            console.log('Winner');
            playerScore++;
        } else if (round === 'Loser') {
            console.log('Loser');
            computerScore++;
        } else {
            console.log('Tie');
        }
    }
    if (playerScore > computerScore) {
        console.log('You are the winner!!');
    } else {
        console.log('You lose!!');
    }
    
}

playGame();