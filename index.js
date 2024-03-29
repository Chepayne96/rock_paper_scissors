const display = document.querySelector('#display');
const finalMessage = document.createElement('h1');
    // Scores for both
    let playerScore = 0;
    let computerScore = 0;
// Upon clicking of one of  the buttons the game starts
function playGame(event) {
    // This gets the value of the button pressed then displays it
    let playerSelection = event.target.value;
    const playerChoice = document.createElement('h3');
    playerChoice.textContent = 'Player has selected ' + playerSelection;
    display.appendChild(playerChoice);
    
    // This is getting the random computer choice and displaying it
    let computerSelection = getComputerChoice();
    const computerChoice = document.createElement('h3');
    computerChoice.textContent = 'Computer has selected ' + computerSelection;
    display.appendChild(computerChoice);
    
    // Compare the selection and choice the winner, update score
    const displayWinner = document.createElement('h3');
    const displayScore = document.createElement('h3');
    if (playerSelection === computerSelection) {
        displayWinner.textContent = 'Round tie';
        display.appendChild(displayWinner);
        // Displays the score after the winner
        displayScore.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
        displayWinner.appendChild(displayScore);
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')
    ) {
        playerScore ++;
        displayWinner.textContent = "Round won";
        display.appendChild(displayWinner);
        // Displays the score after the winner
        displayScore.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
        displayWinner.appendChild(displayScore);
    } else {
        computerScore ++;
        displayWinner.textContent = 'Round lost';
        display.appendChild(displayWinner);
        // Displays the score after the winner
        displayScore.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
        displayWinner.appendChild(displayScore);
    }
    if (playerScore === 5) {
        finalMessage.textContent = "You are the Winner!!";
        display.appendChild(finalMessage);
    } else if (computerScore === 5) {
        finalMessage.textContent = "You are the Loser!!";
        display.appendChild(finalMessage);
    } else {
        
    }

}
// Function to get the random computer choice
let choiceArr = ["Rock", "Paper", "Scissor"];
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    computerSelection = choiceArr[i];
    return computerSelection;
};
