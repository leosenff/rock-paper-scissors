//Escolhe aleatoriamente uma das opções definidas
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[(Math.floor(Math.random() * choices.length))];
}
//Verifica a escolha do jogador e retorna a pontuação ao vencedor da rodada
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
    
    } else if (playerChoice.toLowerCase() == computerChoice) {
        return "It's a Tie";
    } else
    return "Choose a valid option!";
        
}

//Gera um jogo onde termina quando concluir 3 vitorias, realizando um novo jogo caso ocorra empate
function game(){
    while(playerScore < 3 && computerScore < 3){
        let playerChoice = prompt("Choose between: \n-Rock \n-Paper \n-Scissor");
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

//Determina quem venceu o Jogo
function gameScore(playerScore) {
    if (playerScore === 3) {
        return "Congratulations, You Win!";
    } else
    return "You lose, Good luck next time";
}

let playerScore = 0;
let computerScore = 0;

game();

console.log (gameScore(playerScore))
console.log("Player final Score ", playerScore);
console.log("Computer final Score ", computerScore);