function computerPlay(){
    return Math.floor(Math.random()*3);
}

function getUserMove(){
    let playerDecision = prompt("Enter your move:");
    let playerMove = 0;
    switch(playerDecision.toLowerCase()){
	    case "rock":
		    playerMove=0;
		    break;
	    case "paper":
		    playerMove=1;
		    break;
	    case "scisors":
		    playerMove=2;
		    break;
	    default:
		    alert("Invalid input!");
		    break;
    }
    return playerMove;
}

function playRound(){
    const computerDecision = computerPlay();
    const playerDecision = getUserMove();
    console.log(`computer: ${computerDecision}\nplayer: ${playerDecision}`);
    let result="";
    if (computerDecision==playerDecision) {result = "DRAW!";}
	else{
		if(computerDecision == 0 && playerDecision == 2){
			result = "you LOSE!";
		}
		else if(computerDecision == playerDecision + 1){
		    result = "you LOSE!";
		}
		else{result = "you WIN!!!";}
	}
    return result;
}

console.log(playRound());