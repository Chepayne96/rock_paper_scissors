This project was a update to the Rock-Paper-Scissor game from earlier.

This project was way out of what I usually do which was super cool and fun.
I borrowed one thing from stackoverflow but I made sure I fully understood what, why, and how it worked before moving on.

I set the buttons to have a onclick attribute in the HTML so I could easily pull the value from the button that was pressed. (This process was the thing I burrowed).

Next I added all the selections from the random computer to the button press and had them being compared.

Each button press is a round and at the end of each round the score is tallied then checked to see if anyone had reached the end goal. Assuming not the game will go again on the button press, if the goal is met then the 'finalMessage' will let you know in big bold weather you lost or won.

I feel like there are things I could definetly do better or even have the game run soomthier but I feel like I have done all that was asked in the project details.
    "In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life."