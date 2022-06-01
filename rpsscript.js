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
    let lineBreak = document.createElement('br');
    results.appendChild(lineBreak);

    if (playerSelection == computerSelection) {
        results.textContent = `Tie! You both picked ${playerSelection}. Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[0] && playerSelection == lower[1]) {
        playerScore++;
        results.textContent = `You won! Paper beats Rock! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[0] && playerSelection == lower[2]) {
        computerScore++;
        results.textContent = `You lost! Rock beats Scissors! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[1] && playerSelection == lower[0]) {
        computerScore++;
        results.textContent = `You lost! Paper beats Rock! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[1] && playerSelection == lower[2]) {
        playerScore++;
        results.textContent = `You won! Scissors beats Paper! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[2] && playerSelection == lower[0]) {
        playerScore++;
        results.textContent = `You won! Rock beats Scissors! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (computerSelection == lower[2] && playerSelection == lower[1]) {
        computerScore++;
        results.textContent = `You lost! Scissors beats Paper! Score: Player:${playerScore} | Computer: ${computerScore}.`;
    } else if (playerSelection != lower[0] || lower[1] || lower[2]) {
        results.textContent = "Error! Selection does not exist!";
    }
    if (playerScore == 5) {
        alert(`Congrats, you won in the game of Rock, Paper Scissors. Score: ${playerScore} | Computer: ${computerScore}. `)
        playerScore = 0;
        computerScore = 0;
        if(window.confirm('Press any button to play again!')) {
        } else {
            alert("Thank you for playing! Press any button to play or refresh the page!");
        } 
    } else if (computerScore == 5) {
        alert(`You lost in the game of Rock, Paper Scissors. Score: ${playerScore} | Computer: ${computerScore}. `)
        playerScore = 0;
        computerScore = 0;
        if(window.confirm('Press any button to play again!')) {
        } else {
            alert("Thank you for playing! Press any button to play or refresh the page!");
        }
    }
    document.body.appendChild(results);

}



const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const divRPS = document.querySelector('#rpsButton');
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

divRPS.appendChild(button);

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













// down below is unused code

/* game() initiates the game for 5 iterations */

// function game() {
//     for(i = 0; i < 5; i++) {
//         const computerSelection = computerPlay(lower);
//         let playerSelection = prompt("Type Rock, Paper, or Scissors: ");
//         playRound(playerSelection.toLowerCase(), computerSelection);
//     }
// }


// function score(playerScore, computerScore) {
//     if (playerScore == 5) {
//         alert(`Congrats, you won in the game of Rock, Paper Scissors. Score: ${playerScore} | Computer: ${computerScore}. `)
//         playerScore = 0;
//         computerScore = 0;
//         if(window.confirm('Press any button to play again!')) {
//             rps();
//         } else {
//             alert("Thank you for playing! Press any button to play or refresh the page!");
//             rps();
//         }
//     } else if (computerScore == 5) {
//         alert(`You lost in the game of Rock, Paper Scissors. Score: ${playerScore} | Computer: ${computerScore}. `)
//         playerScore = 0;
//         computerScore = 0;
//         if(window.confirm('Press any button to play again!')) {
//             rps();
//         } else {
//             alert("Thank you for playing! Press any button to play or refresh the page!");
//         }
//     }
//  }