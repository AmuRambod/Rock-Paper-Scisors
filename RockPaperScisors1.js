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

function getPlayerMove(){
    let playerDecision = prompt("Enter your move:").toLowerCase();
    return playerDecision;
}

function playRound(computerMove , playerMove){
    let result = 0;
    let message = "";
    if (computerMove === playerMove){
        message = `DRAW! we both chose ${computerMove}.`;
        result = 0;
    }
    else{
        switch(playerMove){
            case "rock":
                if (computerMove == "paper"){
                    message = `you LOSE! ${computerMove} beats ${playerMove}.`;
                    result = -1;
                }
                else{
                    message = `you WIN! ${playerMove} beats ${computerMove}.`;
                    result = 1;
                }
                break;
            case "paper":
                if (computerMove == "scisors"){
                    message = `you LOSE! ${computerMove} beats ${playerMove}.`;
                    result = -1;
                }
                else{
                    message = `you WIN! ${playerMove} beats ${computerMove}.`;
                    result = 1;
                }
                break;
            case "scisors":
                if (computerMove == "rock"){
                    message = `you LOSE! ${computerMove} beats ${playerMove}.`;
                    result = -1;
                }
                else{
                    message = `you WIN! ${playerMove} beats ${computerMove}.`;
                    result = 1;
                }
                break;
            default:
                result = "Something went wrong!!!";
                break;
        }
    }
    return [result,message];
}

function game(){
    let score = 0;
    for(let games = 1; games <= 5 ;games++){
        const computerMove = computerPlay();
        const playerMove = getPlayerMove(); 
        score += playRound(computerMove,playerMove)[0];
        console.log(playRound(computerMove,playerMove)[1] + `\nscore = ${score}`);
    }
}

game();

// const computerMove = computerPlay();
// const playerMove = getPlayerMove();
// console.log(playRound(computerMove,playerMove));

