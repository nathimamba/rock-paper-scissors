let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let result = "";


const choiceBtn = document.querySelectorAll(".selection button");
const display = document.querySelector('#demo')
const pCount = document.querySelector('#pScore');
const cCount = document.querySelector('#cScore');
const pWeapon = document.querySelector('#pWeapon');
const cWeapon = document.querySelector('#cWeapon');

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            display.textContent = "You Lose! Paper beats Rock";
            display.style.color = "red";
            computerScore += 1;
        } else if (computerSelection === "scissors") {
            display.textContent = "You Win! Rock beats Scissors";
            display.style.color = "green";
            playerScore += 1;
        } else {
            display.textContent = "It's a tie";
            display.style.color = "orange";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            display.textContent = "You Lose! Scissors beats Paper";
            display.style.color = "red";
            computerScore += 1;
        } else if (computerSelection === "rock") {
            display.textContent = 'You Win! Paper beats Rock';
            display.style.color = "green";
            playerScore += 1;
        } else {
            display.textContent = "It's a tie";
            display.style.color = "orange";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            display.textContent = "You Lose! Rock beats Scissors";
            display.style.color = "red";
            computerScore += 1;
        } else if (computerSelection === "paper") {
            display.textContent = "You Win! Scissors beats paper";
            display.style.color = "green";
            playerScore += 1;
        } else {
            display.textContent = "It's a tie";
            display.style.color = "orange";
        }
    }
}


function playGame() {
    playRound(playerSelection, computerSelection);
    if (playerSelection === 'paper') {
        pWeapon.src = "./images/icons8-paper-hand-48.png";
    } else if (playerSelection === 'rock') {
        pWeapon.src = "./images/icons8-rock-hand-48.png";
    } else if (playerSelection === 'scissors') {
        pWeapon.src = "./images/icons8-scissors-hand-48.png";
    }

    if (computerSelection === 'scissors') {
        cWeapon.src = "./images/icons8-scissors-hand-48.png";
    } else if (computerSelection === 'paper') {
        cWeapon.src = "./images/icons8-paper-hand-48.png";
    } else if (computerSelection === 'rock') {
        cWeapon.src = "./images/icons8-rock-hand-48.png";
    }


    pCount.textContent = playerScore;
    cCount.textContent = computerScore;
    if (playerScore === 5) {
        display.textContent = "You Won the Game! Congrats";
        playerScore = 0;
        computerScore = 0;
        pCount.textContent = playerScore;
        cCount.textContent = computerScore;
        pWeapon.src = "./images/icons8-rock-hand-48.png";
        cWeapon.src = "./images/icons8-rock-hand-48.png";
    } else if (computerScore === 5) {
        display.textContent = "You Lost the game:/ Maybe find something else to do?";
        playerScore = 0;
        computerScore = 0;
        pCount.textContent = playerScore;
        cCount.textContent = computerScore;
        pWeapon.src = "./images/icons8-rock-hand-48.png";
        cWeapon.src = "./images/icons8-rock-hand-48.png";
    }

}


choiceBtn.forEach(button => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        playGame();
    })
});