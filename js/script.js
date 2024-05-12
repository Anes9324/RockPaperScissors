/* This is the first program I write in js 
It is a classic game of Rock Paper Scissors 
let assimilate  Rock by number 1, Paper is 2 et Scissors is 3
let getRandomNum to get a random number between 1 and 3. this number represents computerChoice 
let getComputerSelection a function to translate the random returned number from getRandomNum to a choice. 
let playRound a function that prompt to the user the selection 
*/
const buttons = document.querySelectorAll("input[type='button']");
const playerHand = document.querySelector("#player_hand");
const computerHand = document.querySelector("#computer_hand");
const roundScore = document.querySelector("#round_score");
//Nav bar stats : 
const playerNavScore = document.querySelector("#player_score");
const computerNavScore = document.querySelector("#computer_score");
const roundPlayed = document.querySelector("#round_played");

let playerSelection;
let score = [0, 0, 0] // [playerScore, computerScore, draws]

function getRandomNum(min, max) {     
    const floatRandom = Math.random();
    const difference = max - min;

    const random = Math.round(floatRandom * difference);
    const randomWithinRange = random + min;
    return randomWithinRange;
}

function getComputerSelection() {   
    let computerChoiceNum = getRandomNum(1, 3);
    let computerChoice;

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

function getPlayerSelection() {
    let playerSelection;
    buttons.forEach((button) => button.addEventListener("click", (e) => playerSelection = e.target.value));
}

function playRound(playerSelection, computerSelection) {    
    let roundScoreString;
    let roundScore = ""; 

    if (playerSelection.toLocaleLowerCase() === computerSelection.toLocaleLowerCase()) {
        roundScoreString = `No winner, you both ${playerSelection}`
        roundScore = "draw";
    } else {
        if (playerSelection.toLocaleLowerCase() === "rock") {
            switch (computerSelection.toLocaleLowerCase()) {
                case "paper":
                    roundScoreString = `You have lost, paper beats rock`;
                    roundScore = "computer";
                    break;
                case "scissors":
                    roundScoreString = "You have won, rock beats scissors";
                    roundScore = "player";
            }
        } else if (playerSelection.toLocaleLowerCase() === "paper") {
            switch (computerSelection.toLocaleLowerCase()) {
                case "rock":
                    roundScoreString = `You have won, paper beats rock`;
                    roundScore = "player";
                    break;
                case "scissors":
                    roundScoreString = "You have lost, scissors beats paper";
                    roundScore = "computer";
            }
        } else if (playerSelection.toLocaleLowerCase() === "scissors") {
            switch (computerSelection.toLocaleLowerCase()) {
                case "rock":
                    roundScoreString = `You have lost, rock beats scissors`;
                    roundScore = "computer";
                    break;
                case "paper":
                    roundScoreString = "You have won, scissors beats paper";
                    roundScore = "player";
            }
        } else {
            roundScoreString = "Wrong input, make a choice : Rock, Paper or Scissors !"
        }
    }
    return [roundScoreString, roundScore];
}

function finalResult(computerScore, playerScore) {      //This function return the final message to user "Win or lose" depending on the score of the game
    let finalResult;
    if (computerScore > playerScore) {
        finalResult = "You have lost the game vs computer! \nHard Luck !";
    } else if (computerScore < playerScore) {    // Note that we are player best of 5 round, there is no chance of a draw in our case. if number of rounds is pair change this condition. 
        finalResult = "You have won the game vs computer !\nCongrats !!!";
    } else {
        finalResult = "It's a draw !"
    }
    return finalResult;
}


function playGame(event) {   //this function is to play a game of 5 rounds

    buttons.forEach(button => button.addEventListener("click", function (e) {
        playerSelection = e.target.value;
    

    const ComputerSelection = getComputerSelection();
    
    const results = playRound(playerSelection, ComputerSelection);
    const roundResult = results[0];
    updateScore(results[1]);
    verifyScore();

    
    playerHand.textContent = `Player's choice : \n ${playerSelection}`
    computerHand.textContent = `Computer's choice : \n ${ComputerSelection.toUpperCase()}`
    roundScore.textContent = `${roundResult}`
    
    //updating nav bar score : 
    playerNavScore.textContent = `score : ${score[0]}`
    computerNavScore.textContent = `score : ${score[1]}`
    roundPlayed.textContent = `${score[0]+score[1]+score[2]}`
    }));
        

};

function updateScore(winner) {
    if (winner === "player") {
        score[0] += 1;
    } else if (winner === "computer") {
        score[1] += 1; 
    } else {
        score[2] += 1; 
    } 
}

function verifyScore() {
    if (score[0] === 5 || score[1] === 5) {
        alert(finalResult(score[1], score[0]));
        score = [0,0,0];

        //reset choices : 
        
        playerHand.textContent = `Player's choice : \n`
        computerHand.textContent = `Computer's choice : \n`
    };
}

/* function verifyGame(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) { 
        alert(finalResult(computerScore, playerScore));
        playerScore = 0;
        computerScore = 0;
        draw = 0;

        //reset choices : 
        
        playerHand.textContent = `Player's choice : \n`
        computerHand.textContent = `Computer's choice : \n`
        return true;
    } else {
        return false;
    }
    
}; */

playGame(); 





