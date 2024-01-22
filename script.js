//Escolhe aleatoriamente uma das opções definidas
function getComputerChoice() {
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissor") {
        return "You Win! Rock beats Scissor";
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        return "You Lose! Paper beats Rock"; 

    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        return "You Win! Paper beats Rock";
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissor"){
        return "You Lose! Scissor beats Paper";

    } else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "paper"){
        return "You win! Scissor beats paper";
    } else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "rock"){
        return "You lose! Rock beats scissor";

    } else 
    return "It's a Tie";
}

let arr = ["rock", "paper", "scissor"];
let computerChoice = getComputerChoice();



let playerChoice = "paper";
console.log(playerChoice);
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));