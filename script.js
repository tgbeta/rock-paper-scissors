function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * options.length);
    let ans = (random, options[random]);

    return ans;
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let countPlayer = 0;
    let countComputer = 0;

    if ( playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock.");
        countComputer++;
    } 
    if ( playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors.");
        countPlayer++;
    } 
    if ( playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper.");
        countComputer++
    } 
    if ( playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock.");
        countPlayer++;
    }
    if ( playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors.");
        countComputer++;
    }
    if ( playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper.");
        countPlayer++;
    }

}

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your option? Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
