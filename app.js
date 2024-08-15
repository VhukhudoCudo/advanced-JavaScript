"use strict"

// let userScore = 0;
// let computerScore = 0;
// let userScore_span = document.getElementById("user-score");
// let computerScore_span = document.getElementById("computer-score");
// let scoreBoard_div = document.querySelector(".score-board");
// let result_p = document.querySelector(".result > p");
// let rock_div = document.getElementById("r");
// let paper_div = document.getElementById("p");
// let scissors_div = document.getElementById("s")



// function getComputerChoice() {
//     let choices = ['r', 'p', 's'];
//     let randomNumber = (Math.floor(Math.random() * 3));
//     return choices[randomNumber];
// }


// function convertToWord(letter) {
//     if (letter === "r") return "Rock";
//     if (letter === "p") return "paper";
//     if (letter === "s") return "Scissors";
// }

// function win(userChoice, computerChoice) {
//     let smallUserWord = "user".fontsize(3).sub();
//     let smallCompWord = "comp".fontsize(3).sub();
//     let userChoice_div = document.getElementById(userChoice);
//     userScore++;
//     userScore_span.innerHTML = userScore;
//     computerScore_span.innerHTML = computerScore;
//     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;


//     localStorage.setItem("lastResult", convertToWord(userChoice));
//    let previousResult = localStorage.getItem("lastResult");
//     // document.getElementById("lastResult").innerHTML = previousResult;
//     console.log(localStorage.getItem("lastResult"));
//     document.getElementById("previousResult").innerHTML = previousResult;
//     // result_p.innerHTML = "You " + "beat " + "the computer," + "You win!";
//     userChoice_div.classList.add('green-glow')
//     setTimeout(() => userChoice_div.classList.remove('green-glow'), 3000);
//     gameEnd();
// }

// function lose(userChoice, computerChoice) {
//     let smallUserWord = "user".fontsize(3).sub();
//     let smallCompWord = "comp".fontsize(3).sub();
//     let userChoice_div = document.getElementById(userChoice);
//     computerScore++;
//     userScore_span.innertHTML = userScore;
//     computerScore_span.innerHTML = computerScore;
//     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}. You lost..!`;
//     // result_p.innerHTML = "The " + (userChoice) + "loses" + (computerChoice) + "." + "You lost...!";
//     userChoice_div.classList.add('red-glow')
//     setTimeout(() => userChoice_div.classList.remove('red-glow'), 3000);
// }

// function draw(userChoice, computerChoice) {
//     let smallUserWord = "user".fontsize(3).sub();
//     let smallCompWord = "comp".fontsize(3).sub();
//     let userChoice_div = document.getElementById(userChoice);
//     // userScore++;
//     userScore_span.innertHTML = userScore;
//     computerScore_span.innerHTML = computerScore;
//     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
//     //result_p.innerHTML = "The " + (userChoice) + "equals" + (computerChoice) + "." + "It's a draw!";
//     userChoice_div.classList.add('grey-glow')
//     setTimeout(() => userChoice_div.classList.remove('grey-glow'), 3000);
// }



// function game(userChoice) {
//     let computerChoice = getComputerChoice();
//     switch (userChoice + computerChoice) {
//         case "rs"://1.user  2. computer
//         case "pr":
//         case "sp":
//             win(userChoice, computerChoice);
//             break;
//         case "rp":
//         case "ps":
//         case "sr":
//             lose(userChoice, computerChoice);
//             break;
//         case "rr":
//         case "pp":
//         case "ss":
//             draw(userChoice, computerChoice);
//             break;
//     }
// }



// rock_div.addEventListener('click', () => game("r"));
// paper_div.addEventListener('click', () => game("p"));
// scissors_div.addEventListener('click', () => game("s"));

// function gameEnd(event) {
//     event.preventDefault();
//     if (userScore <= 10) {
//         result_p.innerHTML = "You beat the computer. Game over!";
//         location.reload();
//         userScore = 0;
//     }
//     if (computerScore <= 10) {
//         result_p.innerHTML = "The computer win, Game over!";
//         location.reload();
//         computerScore = 0;
//     }
// }


// Initialize scores from local storage or set to 0 if not present
let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

// Update the score display based on current values
function updateScoreDisplay() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

// Save scores to local storage
function saveScores() {
    localStorage.getItem('userScore', userScore);
    localStorage.getItem('computerScore', computerScore);
}



function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    userScore++;
    updateScoreDisplay();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

    // Save last result
    localStorage.setItem("lastResult", `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}`);
    document.getElementById("previousResult").innerHTML = localStorage.getItem("lastResult");

    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 3000);
    saveScores(); // Save updated scores
    gameEnd();
}

function lose(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    computerScore++;
    updateScoreDisplay();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost..!`;

    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 3000);
    saveScores(); // Save updated scores
}

function draw(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    updateScoreDisplay();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;

    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 3000);
    saveScores(); // Save updated scores
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
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

rock_div.addEventListener('click', () => game("r"));
paper_div.addEventListener('click', () => game("p"));
scissors_div.addEventListener('click', () => game("s"));

function gameEnd() {
    if (userScore >= 10) {
        result_p.innerHTML = "You beat the computer. Game over!";
        // Reset the game and scores
        userScore = 0;
        computerScore = 0;
        saveScores(); // Save updated scores
        setTimeout(() => location.reload(), 2000); // Reload after 2 seconds
    } else if (computerScore >= 10) {
        result_p.innerHTML = "The computer wins. Game over!";
        // Reset the game and scores
        userScore = 0;
        computerScore = 0;
        saveScores(); // Save updated scores
        setTimeout(() => location.reload(), 2000); // Reload after 2 seconds
    }
}

// Initialize display on page load
updateScoreDisplay();

localStorage.clear();
//userScore.clear();
//computerScore.clear();

// function keepScore() {
//     if (window.reload) {
//         localStorage.clear();
//     }
// }
// keepScore();




