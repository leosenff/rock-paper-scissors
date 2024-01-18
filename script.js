//Escolhe aleatoriamente uma das opções definidas
function getComputerChoice() {
    return arr[(Math.floor(Math.random() * arr.length))];
}

let arr = ["Rock", "Paper", "Scissor"];
let computerChoice = getComputerChoice();

console.log ("Computer choice is: ", computerChoice);

if (computerChoice === "Rock") {
    console.log("lol");
}

// console.log (computerResponse);
// console.log (getComputerChoice());

// let choice = prompt("Escolha entre: \n -Rock \n -Paper \n -Scissor ");


// if (choice.toLowerCase() === "rock" ){
//     console.log("é pedra mesmo");
// } else if (choice.toLowerCase() === "paper") {
//     console.log("é papel mesmo");
// } else if (choice.toLowerCase() === "scissor") {
//     console.log ("é tesoura mesmo");
// } else 
// console.log("Valor não aceito");
// //reiniciar

// console.log(getPlayerChoice(choice));


// console.log(choice);
// console.log (getPlayerChoice());
