//Escolhe  aleatoriamenteuma das opções definidas
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissor = document.querySelector('.scissor');
const game = document.querySelector('.game');
const move = document.querySelector('.moves');
const score = document.querySelector('.score');

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock" && computerChoice == "Scissor") {
        playerScore += 1;
        return "You Win! Rock beats Scissor";
    } else if (playerChoice == "Rock" && computerChoice == "Paper"){
        computerScore += 1;
        return "You Lose! Paper beats Rock"; 
    } else if (playerChoice == "Paper" && computerChoice == "Rock"){
        playerScore += 1;
        return "You Win! Paper beats Rock";
    } else if (playerChoice == "Paper" && computerChoice == "Scissor"){
        computerScore += 1;
        return "You Lose! Scissor beats Paper";
    } else if (playerChoice == "Scissor" && computerChoice == "Paper"){
        playerScore += 1;
        return "You Win! Scissor beats paper";
    } else if (playerChoice == "Scissor" && computerChoice == "Rock"){
        computerScore += 1;
        return "You Lose! Rock beats scissor";
    } else if (playerChoice == computerChoice) {
        return "It's a Tie";
    }
}

function gameScore(playerScore, computerScore) {
    if (playerScore === 5) {
        move.textContent = "Reload the page for a new match!";
        game.textContent = "THE PLAYER WINS!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissor.disabled = true;
        return;
    } else if (computerScore === 5) {
        move.textContent = "Reload the page for a new match!";
        game.textContent = "THE COMPUTER WINS :(";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissor.disabled = true;
        return;
    }
}
btnRock.addEventListener('click', () => {
    playerChoice = "Rock";
    computerChoice = getComputerChoice();
    
    game.textContent = playRound(playerChoice, computerChoice);
    move.textContent = "You choose: " + playerChoice + " | Computer choose " + computerChoice; 
    score.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    gameScore(playerScore, computerScore);
    
})

btnPaper.addEventListener('click', () => {
    playerChoice = "Paper";
    computerChoice = getComputerChoice();

    game.textContent = playRound(playerChoice, computerChoice);
    move.textContent = "You choose: " + playerChoice + " | Computer choose " + computerChoice; 
    score.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    gameScore(playerScore, computerScore);
})

btnScissor.addEventListener('click', () => {
    playerChoice = "Scissor";
    computerChoice = getComputerChoice();

    game.textContent = playRound(playerChoice, computerChoice);
    move.textContent = "You choose: " + playerChoice + " | Computer choose " + computerChoice; 
    score.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    gameScore(playerScore, computerScore);
})

let computerChoice;
let playerScore = 0;
let computerScore = 0;