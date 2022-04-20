function computerPlay() {

    const randNumb = Math.floor(Math.random() * lower.length);
    
    const choice = lower[randNumb];

    console.log("Computer chose: ", choice);

    return choice;

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("Tie! You both picked " + playerSelection);
    } else if (computerSelection == lower[0] && playerSelection == lower[1]) {
        console.log("You won! Paper beats Rock!");
    } else if (computerSelection == lower[0] && playerSelection == lower[2]) {
        console.log("You lost! Rock beats Paper!");
    } else if (computerSelection == lower[1] && playerSelection == lower[0]) {
        console.log("You lost! Paper beats Rock!");
    } else if (computerSelection == lower[1] && playerSelection == lower[2]) {
        console.log("You won! Scissors beats Paper!");
    } else if (computerSelection == lower[2] && playerSelection == lower[0]) {
        console.log("You won! Rock beats Scissors!");
    } else if (computerSelection == lower[2] && playerSelection == lower[1]) {
        console.log("You lost! Scissors beats Paper");
    }
    
}

const choose = ["Rock", "Paper", "Scissors"];

/*
Created a separate array to contain the lowercase conversion of the original array.
This is needed because we will be making this web-application case insensitive since 
computerSelection and playerSelection will be making comparing themselves to each other.
The for loop converts the original array to lowercase.
*/

const lower = [];

for (let i = 0; i < choose.length; i++) {
    lower[i] = choose[i].toLowerCase();
}

const computerSelection = computerPlay(lower);
let playerSelection = prompt("Type Rock, Paper, or Scissors: ");
playRound(playerSelection.toLowerCase(), computerSelection);
