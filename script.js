//Escolhe aleatoriamente uma das opções definidas
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissor") {
        playerScore += 1;
        return "You Win! Rock beats Scissor";
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        computerScore += 1;
        return "You Lose! Paper beats Rock"; 

    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        playerScore += 1;
        return "You Win! Paper beats Rock";
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissor"){
        computerScore += 1;
        return "You Lose! Scissor beats Paper";

    } else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "paper"){
        playerScore += 1;
        return "You win! Scissor beats paper";
    } else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "rock"){
        computerScore += 1;
        return "You lose! Rock beats scissor";

    } else 
        return "It's a Tie";
}

function game(){
    while(playerScore < 3 && computerScore < 3){
        let playerChoice = prompt("Escolha entre Rock, Paper and Scissor");
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));

    }
}

let playerScore = 0;
let computerScore = 0;


game();

console.log(playerScore);
console.log(computerScore);