//Atribuir os números para cada opção
function getComputerChoice (){
    if (computerResponse === 1){
        return str = "Rock";
    } else if (computerResponse === 2){
        return str = "Paper";
    } else
    return str = "Scissor";
}

//Escolher um número aleatorio entre um min e max definido
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getPlayerChoice (choice) {
    
    }


let computerResponse = getRandomInt(1, 3);

// console.log (computerResponse);
// console.log (getComputerChoice());

let choice = prompt("Escolha entre: \n -Rock \n -Paper \n -Scissor ");
if (choice.toLowerCase() === "rock" ){
    console.log("é pedra mesmo");
} else if (choice.toLowerCase() === "paper") {
    console.log("é papel mesmo");
} else if (choice.toLowerCase() === "scissor") {
    console.log ("é tesoura mesmo");
} else 
console.log("Valor não aceito");

console.log(choice);
// console.log (getPlayerChoice());
