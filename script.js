let playerScore = 0;
let computerScore = 0;

//#region UI part

//Emoji Pack:
const rockEmoji = "&#x270A";
const paperEmoji = "&#x270B";
const scisorsEmoji = "&#x270C";
function emojiFy(move){
    switch(move){
        case "rock":
            return rockEmoji;
        case "paper":
            return paperEmoji;
        case "scisors":
            return scisorsEmoji;
        default:
            return "";
    }
}

//main container
const mainContainer = document.querySelector(".main-container");

//scores
const playerScoreBoard = document.querySelector("#player-score");
const computerScoreBoard = document.querySelector("#computer-score");

function scoreTally(result){
    switch(result){
        case 1:
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            break;
        case -1:
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            break;
        default:
            return;
    }
}

//buttons
const buttons = document.querySelectorAll(".move-button");
buttons.forEach(button => button.addEventListener("click",playRound));

//arena
const playerEmoji = document.querySelector("#player-move");
const computerEmoji = document.querySelector("#computer-move");

//outcome
const outcome = document.createElement("div");
outcome.classList.add("outcome");



// const outcome = document.querySelector(".outcome");

//#endregion

//#region Rock Paper Scisors functions

// computerPlay() => randomly choses rock,paper or scisors
function computerPlay(){
    let computerMove = Math.floor(Math.random()*3);
    let computerDecision = "";
    switch (computerMove){
	    case 0: 
            computerDecision = "rock";
		    break;
        case 1: 
            computerDecision = "paper";
            break;
        case 2:
            computerDecision = "scisors";
            break;
        default:
            //exit the programm
            console.log("Something went horribly wrong!!!");
		    break;
    }
    return computerDecision;
}

// playRound() => gets the player move from the id of the pressed button and plays a round and returns a score with a result message: +1 for win, -1 for loss and 0 for a draw
function playRound(){
    const playerMove = this.id;
    playerEmoji.innerHTML = emojiFy(playerMove);
    const computerMove = computerPlay();
    computerEmoji.innerHTML = emojiFy(computerMove);

    console.log(`Player: ${playerMove}\nComputer: ${computerMove}`);

    let result = 0;
    let message = "";
    if (computerMove === playerMove){
        // message = `DRAW! we both chose ${computerMove}.`;
        message = "DRAW!!!";
        result = 0;
    }
    else{
        switch(playerMove){
            case "rock":
                if (computerMove == "paper"){
                    // message = `you LOSE! ${computerMove} beats ${playerMove}.`;
                    message = "you LOSE!!!";
                    result = -1;
                }
                else{
                    // message = `you WIN! ${playerMove} beats ${computerMove}.`;
                    message = "you WIN!!!";
                    result = 1;
                }
                break;
            case "paper":
                if (computerMove == "scisors"){
                    // message = `you LOSE! ${computerMove} beats ${playerMove}.`;
                    message = "you LOSE!!!";
                    result = -1;
                }
                else{
                    // message = `you WIN! ${playerMove} beats ${computerMove}.`;
                    message = "you WIN!!!";
                    result = 1;
                }
                break;
            case "scisors":
                if (computerMove == "rock"){
                    // message = `you LOSE! ${computerMove} beats ${playerMove}.`;
                    message = "you LOSE!!!";
                    result = -1;
                }
                else{
                    // message = `you WIN! ${playerMove} beats ${computerMove}.`;
                    message = "you WIN!!!";
                    result = 1;
                }
                break;
            default:
                result = "Something went wrong!!!";
                break;
        }
    }
    console.log(message , result);
    outcome.textContent = message;
    mainContainer.appendChild(outcome);
    scoreTally(result);
    // return [result,message];
}

//#endregion Rock Paper Scisors Functions