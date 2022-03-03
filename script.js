//Computer side
let computerMove = Math.floor(Math.random()*3);
let computerDecision = "";
switch (computerMove){
	case 0: 
        computerDecision = "Rock";
		break;
	case 1: 
        computerDecision = "Paper";
		break;
	case 2:
		computerDecision = "Scisors";
		break;
	default:
        //exit the programm
		console.log("Something went horribly wrong!!!");
		break;
}

//User side
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

function playRockPaperScisors(computerDecision,playerDecision){
	if (computerDecision==playerDecision) {alert("DRAW!");}
	else{
		if(computerDecision == 0 && playerDecision == 2){
			alert("you LOSE!");
		}
		else if(computerDecision == playerDecision + 1){
		    alert("you LOSE!");
		}
		else{alert("you WIN!!!");}
	}
}

playRockPaperScisors(computerMove,playerMove);
console.log(`You: ${playerDecision}\nComputer: ${computerDecision}`);