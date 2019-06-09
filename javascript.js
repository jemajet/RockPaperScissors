function capitalize(s) {
    var lower = s.toLowerCase();
    var lowerArray = lower.split("");
    lowerArray[0] = lowerArray[0].toUpperCase();
    return lowerArray.join("");
}

function computerPlay() {
    var rand = Math.random();
    if (rand < 0.3333) {
        return "Rock";
    } else if (rand < 0.6667) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection, resultDisplay) {
    playerSelection = capitalize(playerSelection);
    if ( (playerSelection !== "Rock") && (playerSelection !== "Scissors") && (playerSelection !== "Paper")) {
        resultDisplay.textContent = ("> Malformed input! Try again!");
        return;
    }
    if ( (playerSelection === "Rock" && computerSelection === "Scissors") || 
         (playerSelection === "Scissors" && computerSelection === "Paper")||
         (playerSelection === "Paper" && computerSelection === "Rock")) {
        resultDisplay.textContent = ("> You Win! " + playerSelection + " beats " + computerSelection);
        return "Win";
    } else if ( (playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Scissors" && computerSelection === "Rock") ||
                (playerSelection === "Paper" && computerSelection === "Scissors")) {
        resultDisplay.textContent = ("> You Lose! " + computerSelection + " beats " + playerSelection);
        return "Loss";
    } else {
        resultDisplay.textContent = ("> Tie, try again! " + playerSelection + " ties " + computerSelection);
        return "Tie";
    }
}

// function game() {
//     let winningScore = 3;
//     let roundsPlayed = 0;
//     let playerScore = 0;
//     let computerScore = 0;
//     while ( (playerScore < winningScore) && (computerScore< winningScore)) {
//         let playerSelection = prompt("Rock, Paper, Scissors, shoot! Best of 5!");
//         let roundResult = playRound(playerSelection, computerPlay());
//         if (roundResult === "Win") {
//             playerScore++;
//             roundsPlayed++;
//         } else if (roundResult === "Loss") {
//             computerScore++;
//             roundsPlayed++;
//         }
//         console.log("Current Score: \nPlayer: " + playerScore + "\nComputer: " + computerScore);
//     }
//     console.log("Final Score: \nPlayer: " + playerScore + "\nComputer: " + computerScore);
//     if (playerScore > computerScore) {
//         return "You Won!";
//     } else if (playerScore === computerScore) {
//         return "You tied";
//     } else {
//         return "You lost";
//     }
// }

function handleEvent(playerSelection, player, computer, roundDisplay) {
    let roundResult = playRound(playerSelection, computerPlay(), roundDisplay);
    let playerScore = Number(player.textContent);
    let computerScore = Number(computer.textContent);
    if (roundResult === "Win") {
        playerScore++;
        player.textContent = playerScore;
    } else if (roundResult === "Loss") {
        computerScore++;
        computer.textContent = computerScore;
    }
}

function endCheck(player, computer) {
    let playerScore = Number(player.textContent);
    let computerScore = Number(computer.textContent);
    return (playerScore >= 5) || (computerScore >= 5);
}

function announceWinner(player, computer) {
    let playerScore = Number(player.textContent);
    let computerScore = Number(computer.textContent);
    let gameOverText = "Game Over! You ";
    if (playerScore > computerScore) {
        gameOverText += "Won! :)";
    } else if (playerScore === computerScore){
        gameOverText += "Tied! :/";
    } else {
        gameOverText += "Lost :(";
    }
    let body = document.querySelector("body");
    let gameOver = document.createElement("h2");
    gameOver.textContent = gameOverText;
    gameOver.classList.add("winner");
    body.appendChild(gameOver);
}

function game() {
    let results = document.querySelector("#results");
    let roundResult = document.createElement("p");
    results.appendChild(roundResult);
    let player = document.querySelector("#player");
    let computer = document.querySelector("#computer");

    let rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", function() {
        handleEvent("Rock", player, computer, roundResult);
        if (endCheck(player, computer)) {
            announceWinner(player, computer);
            return;
        }
    });

    let paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", function() {
        handleEvent("Paper", player, computer, roundResult);
        if (endCheck(player, computer)) {
            announceWinner(player, computer);
            return;
        }
    });

    let scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", function() {
        handleEvent("Rock", player, computer, roundResult);
        if (endCheck(player, computer)) {
            announceWinner(player, computer);
            return;
        }
    });
    
}

game();