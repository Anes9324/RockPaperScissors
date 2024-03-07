/* This is the first program I write in js 
It is a classic game of Rock Paper Scissors 
let assimilate  Rock by number 1, Paper is 2 et Scissors is 3

*/ 

function getRandomNum (min, max) {
    const floatRandom = Math.random();
    const difference = max - min;

    const random = Math.round(floatRandom * difference);
    const randomWithinRange = random + min;
    return randomWithinRange;
}

function getComputerSelection() {
    let computerChoiceNum = getRandomNum(1,3);
    let computerChoice;
    console.log("Computer choice number :", computerChoiceNum);
    switch (computerChoiceNum) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    }
    return computerChoice;
}

/* Finish this part bellow as for tomorrow */  

function playRound(playerSelection, computerSelection) {
    let gameScore;
    let gameScoreValue;
    if (playerSelection.toLocaleLowerCase() === computerSelection.toLocaleLowerCase()) {
        gameScore = `No winners, you both ${playerSelection}`
    } else { 
        if (playerSelection.toLocaleLowerCase() === "rock") {
            switch (computerSelection.toLocaleLowerCase()) {
                case "paper":
                    gameScore = `You have lost, paper beats rock`;
                    break;
                case "scissors":  
                    gameScore = "You have won, rock beats scissors";
            }
        } else if (playerSelection.toLocaleLowerCase() === "paper") {
            switch (computerSelection.toLocaleLowerCase()) {
                case "rock":
                    gameScore = `You have won, paper beats rock`;
                    break;
                case "scissors":  
                    gameScore = "You have lost, scissors beats paper";
            }
        } else if (playerSelection.toLocaleLowerCase() === "scissors") {
            switch (computerSelection.toLocaleLowerCase()) {
            case "rock":
                gameScore = `You have lost, rock beats scissors`;
                break;
            case "paper":  
                gameScore = "You have won, scissors beats paper";
            }
        }
    }
    return gameScore;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 1;
    while (i <= 5) {      //To modify it by playerScore + computerScore <= 5
        const playerSelection = prompt("choose Rock, Paper or Scissors :");
        const ComputerSelection = getComputerSelection(); 
        const result = playRound(playerSelection, ComputerSelection);
        console.log(`You have chosen ${playerSelection}`);
        console.log(`Computer have chosen ${ComputerSelection}`);
        console.log(result);
        i++; 
    }
}

playGame();

