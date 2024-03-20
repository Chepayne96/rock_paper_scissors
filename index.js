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
    console.log(pc, cc);
    if (pc === 'rock' && cc === 'rock'){
        console.log('Its a tie!');
    } else if (pc === 'paper' && cc === 'rock'){
        console.log('Paper beats rock. You win!!');
    } else if (pc === 'scissor' && cc === 'rock'){
        console.log('Rock beats scissors. You loss!!');
    } else if (pc === 'rock' && cc === 'paper'){
        console.log('Paper beats rock. You loss!!');
    } else if (pc === 'paper' && cc === 'paper'){
        console.log('Its a tie!!');
    } else if (pc === 'scissor' && cc === 'paper'){
        console.log('Scissor beats paper. You win!!');
    } else if (pc === 'rock' && cc === 'scissor'){
        console.log('Rock beats scissor. You win!!');
    } else if (pc === 'paper' && cc === 'scissor'){
        console.log('Scissor beats paper. You loss!!');
    } else if (pc === 'scissor' && cc === 'scissor'){
        console.log('Its a tie!!');
    }
}

// playRound();

// Call playRound 5 times and keep score of who wins
function playGame() {
    for (i = 0; i < 5; i++){
        let round = playRound();
    }
}