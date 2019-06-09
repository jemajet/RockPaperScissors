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

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    if ( (playerSelection !== "Rock") && (playerSelection !== "Scissors") && (playerSelection !== "Paper")) {
        console.log("Malformed input! Try again!");
        return;
    }
    if ( (playerSelection === "Rock" && computerSelection === "Scissors") || 
         (playerSelection === "Scissors" && computerSelection === "Paper")||
         (playerSelection === "Paper" && computerSelection === "Rock")) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return "Win";
    } else if ( (playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Scissors" && computerSelection === "Rock") ||
                (playerSelection === "Paper" && computerSelection === "Scissors")) {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        return "Loss";
    } else {
        console.log("Tie, try again! " + playerSelection + " ties " + computerSelection);
        return "Tie";
    }
}

function game() {
    let winningScore = 3;
    let roundsPlayed = 0;
    let playerScore = 0;
    let computerScore = 0;
    while ( (playerScore < winningScore) && (computerScore< winningScore)) {
        let playerSelection = prompt("Rock, Paper, Scissors, shoot! Best of 5!");
        let roundResult = playRound(playerSelection, computerPlay());
        if (roundResult === "Win") {
            playerScore++;
            roundsPlayed++;
        } else if (roundResult === "Loss") {
            computerScore++;
            roundsPlayed++;
        }
        console.log("Current Score: \nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    console.log("Final Score: \nPlayer: " + playerScore + "\nComputer: " + computerScore);
    if (playerScore > computerScore) {
        return "You Won!";
    } else if (playerScore === computerScore) {
        return "You tied";
    } else {
        return "You lost";
    }
}