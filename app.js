"use strict"

let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s")



function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innertHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //result_p.innerHTML = `${convertToWord(userChoice)}$(smallUserWord) beats ${convertToWord(computerChoice)}$(smallCompWord). You win!`;
    result_p.innerHTML = "You " + "beat " + "the computer," + "You win!";
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 3000);
}

function lose(userChoice , computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innertHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //result_p.innerHTML = `${convertToWord(userChoice)}$(smallUserWord) loses ${convertToWord(computerChoice)}$(smallCompWord). You lost..!`;
    result_p.innerHTML = "The " + (userChoice) + "loses" + (computerChoice) + "." + "You lost...!";
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 3000);
}

function draw(userChoice , computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innertHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //result_p.innerHTML = `${convertToWord(userChoice)}$(smallUserWord) equals ${convertToWord(computerChoice)}$(smallCompWord). It's a draw!`;
    result_p.innerHTML = "The " + (userChoice) + "equals" + (computerChoice) + "." + "It's a draw!";
    userChoice_div.classList.add('grey-glow')
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 3000);
}



function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs"://1.user  2. computer
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', () => game("r"));  
    paper_div.addEventListener('click', () => game("p"));    
    scissors_div.addEventListener('click', () => game("s"));
   
}

main();











