let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const number = Math.floor(Math.random() * 3) + 1;

    let computerChoice;

    switch (number) {
        case 1:
            computerChoice = "rock";
            return computerChoice;
            break;
        case 2:
            computerChoice = "paper";
            return computerChoice;
            break;
        case 3:
            computerChoice = "scissors";
            return computerChoice;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let result = " ";

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "You Lose! Paper beats Rock";
            computerScore += 1;
        } else if (computerSelection === "scissors") {
            result = "You Win! Rock beats Scissors";
            playerScore += 1;
        } else {
            result = "It's a tie";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result = "You Lose! Scissors beats Paper";
            computerScore += 1;
        } else if (computerSelection === "rock") {
            result = 'You Win! Paper beats Rock';
            playerScore += 1;
        } else {
            result = "It's a tie";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You Lose! Rock beats Scissors";
            computerScore += 1;
        } else if (computerSelection === "paper") {
            result = "You Win! Scissors beats paper";
            playerScore += 1;
        } else {
            result = "It's a tie";
        }
    }

    return result;
}



function game() {

    //let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i <= 4; i++) {
        getComputerChoice();
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter Rock, Paper or Scissors:");
        console.log(playRound(playerSelection, computerSelection));
    }

    if (computerScore > playerScore) {
        console.log("You Lose!");
    } else if (computerScore < playerScore) {
        console.log("You Win!");
    } else {
        console.log("It's a tie!");
    }
}

game();