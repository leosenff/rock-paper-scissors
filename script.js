function getComputerChoice (){
    if (computerResponse === 1){
        return str = "Rock";
    } else if (computerResponse === 2){
        return str = "Paper";
    } else
    return str = "Scissor";
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let computerResponse = getRandomInt(1, 3);


console.log (computerResponse);
console.log (getComputerChoice());