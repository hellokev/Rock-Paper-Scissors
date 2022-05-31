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
    let lineBreak = document.createElement('br');
    results.appendChild(lineBreak);

    if (playerSelection == computerSelection) {
        results.innerHTML = `Tie! You both picked ${playerSelection}. ${document.write('</br>')} Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[0] && playerSelection == lower[1]) {
        playerScore++;
        results.innerHTML = `You won! Paper beats Rock! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[0] && playerSelection == lower[2]) {
        computerScore++;
        results.innerHTML = `You lost! Rock beats Scissors! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[1] && playerSelection == lower[0]) {
        computerScore++;
        results.innerHTML = `You lost! Paper beats Rock! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[1] && playerSelection == lower[2]) {
        playerScore++;
        results.innerHTML = `You won! Scissors beats Paper! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[2] && playerSelection == lower[0]) {
        playerScore++;
        results.innerHTML = `You won! Rock beats Scissors! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[2] && playerSelection == lower[1]) {
        computerScore++;
        results.innerHTML = `You lost! Scissors beats Paper! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (playerSelection != lower[0] || lower[1] || lower[2]) {
        results.innerHTML = "Error! Selection does not exist!";
    }
    document.body.appendChild(results);
    score(playerScore, computerScore);

}

/* game() initiates the game for 5 iterations */

// function game() {
//     for(i = 0; i < 5; i++) {
//         const computerSelection = computerPlay(lower);
//         let playerSelection = prompt("Type Rock, Paper, or Scissors: ");
//         playRound(playerSelection.toLowerCase(), computerSelection);
//     }
// }

function score() {
    if (playerScore == 5) {
        console.log("Congrats, you won in the game of Rock Paper Scissors!");
        return 0;
    } else if (computerScore == 5) {
        console.log("cmon breh you lost!");
        return 0;
    }
 }



const rock = document.createElement('button');
rock.innerText = 'Rock';
rock.addEventListener('click', () => {
    let playerSelection = rock.innerText;
    const computerSelection = computerPlay(lower);
    if (playerScore < 5 || computerScore < 5){
        playRound(playerSelection.toLowerCase(), computerSelection);
    } else {
        return;
    }
})

const paper = document.createElement('button');
paper.innerText = 'Paper';
paper.addEventListener('click', () => {
    let playerSelection = paper.innerText;
    const computerSelection = computerPlay(lower);
    if (playerScore < 5 || computerScore < 5){ 
        playRound(playerSelection.toLowerCase(), computerSelection);
    } else {
        return;
    }
})

const scissors = document.createElement('button');
scissors.innerText = 'Scissors';
scissors.addEventListener('click', () => {
    let playerSelection = scissors.innerText;
    const computerSelection = computerPlay(lower);
    if (playerScore < 5 || computerScore < 5){ 
        playRound(playerSelection.toLowerCase(), computerSelection);
    } else {
        return;
    }
})


document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

const br = document.createElement("br");
const results = document.createElement('div');

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

// game();

