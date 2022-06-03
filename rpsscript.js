// Global Variables
let playerScore = 0;
let computerScore = 0;

/* computerPlay() picks a random number from 0 to 
length of our "lower array" in this case 3 (0-2)
and returns the element of the array */

function computerPlay() {
    const randNumb = Math.floor(Math.random() * lower.length);
    const choice = lower[randNumb];
    console.log("Computer chose: ", choice);

    return choice;
}

function playRound(playerSelection, computerSelection) {
    results.style.fontSize = "medium";
    results.style.fontWeight = "normal";
    if (playerSelection == computerSelection) {
        results.textContent = `Tie! You both picked ${playerSelection}. Score: Player:${playerScore} | Computer: ${computerScore}.`;
        results.style.color = "#000000";
    } else if (computerSelection == lower[0] && playerSelection == lower[1]) {
        playerScore++;
        results.textContent = `You won! Paper beats Rock! Score: Player: ${playerScore} | Computer: ${computerScore}.`;
        results.style.color = "#00FF00";
    } else if (computerSelection == lower[0] && playerSelection == lower[2]) {
        computerScore++;
        results.textContent = `You lost! Rock beats Scissors! Score: Player: ${playerScore} | Computer: ${computerScore}.`;
        results.style.color = "#FF0000";
    } else if (computerSelection == lower[1] && playerSelection == lower[0]) {
        computerScore++;
        results.textContent = `You lost! Paper beats Rock! Score: Player: ${playerScore} | Computer: ${computerScore}.`;
        results.style.color = "#FF0000";
    } else if (computerSelection == lower[1] && playerSelection == lower[2]) {
        playerScore++;
        results.textContent = `You won! Scissors beats Paper! Score: Player: ${playerScore} | Computer: ${computerScore}.`;
        results.style.color = "#00FF00";
    } else if (computerSelection == lower[2] && playerSelection == lower[0]) {
        playerScore++;
        results.textContent = `You won! Rock beats Scissors! Score: Player: ${playerScore} | Computer: ${computerScore}.`;
        results.style.color = "#00FF00";
    } else if (computerSelection == lower[2] && playerSelection == lower[1]) {
        computerScore++;
        results.textContent = `You lost! Scissors beats Paper! Score: Player: ${playerScore} | Computer: ${computerScore}.`;
        results.style.color = "#FF0000";
    } else if (playerSelection != lower[0] || lower[1] || lower[2]) {
        results.textContent = "Error! Selection does not exist!";
    }
    if (playerScore == 5) {
        results.style.fontSize = "x-large";
        results.style.fontWeight = "bolder";
        results.textContent = `Congrats! you won in the game of Rock, Paper Scissors. Score: ${playerScore} | Computer: ${computerScore}. Press any button to play again.`
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        results.style.fontSize = "x-large";
        results.style.fontWeight = "bolder";
        results.textContent = `You lost in the game of Rock, Paper Scissors. Score: ${playerScore} | Computer: ${computerScore}. Press any button to play again.`
        playerScore = 0;
        computerScore = 0;
    }
}

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const divRPS = document.querySelector('#rpsButton');
rock.className = "rockClass";
paper.className = "paperClass";
scissors.className = "scissorsClass";
rock.innerText = 'Rock';
paper.innerText = 'Paper';
scissors.innerText = 'Scissors';



rock.addEventListener('click', () => {
    let playerSelection = rock.innerText;
    const computerSelection = computerPlay(lower);
    playRound(playerSelection.toLowerCase(), computerSelection);
})
    
paper.addEventListener('click', () => {
    let playerSelection = paper.innerText;
    const computerSelection = computerPlay(lower);
    playRound(playerSelection.toLowerCase(), computerSelection);
})
    
scissors.addEventListener('click', () => {
    let playerSelection = scissors.innerText;
    const computerSelection = computerPlay(lower);
    playRound(playerSelection.toLowerCase(), computerSelection);
})

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

divRPS.append(rock, paper, scissors);

const results = document.createElement('div');
results.className = "resultsClass";
results.textContent = `Score: Player: ${playerScore} | Computer: ${computerScore}.`;
results.style.textAlign = "center";
document.body.appendChild(results);
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