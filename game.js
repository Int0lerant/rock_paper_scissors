let scoreComputer = 0;
let scorePlayer = 0;

function computerPlay(){
    randomNumber = Math.floor(Math.random()*3)+1;
    switch(randomNumber){
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function scoreLog(){
    console.log(`Computer Score: ${scoreComputer}`);
    console.log(`Your Score: ${scorePlayer}`);
}

function playRound(playerSelection, computerSelection){
    if((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors")||
    (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")||
    (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")) {
        console.log(`${playerSelection} beats ${computerSelection}. This means you won!`);
        scorePlayer += 1;
        scoreLog();
    } else if (playerSelection === computerSelection){
        console.log("pewh, just a draw!");
        scoreLog();
    } else{
        console.log(`${computerSelection} beats ${playerSelection}. This means you lost!`);
        scoreComputer += 1;
        scoreLog();
    } 
}

function userInput(){
    return prompt("please enter rock, paper or scissors");
}

function game(){
    for(i = 0; i<5; i++){
        playRound(userInput(),computerPlay());
    }
    if(scoreComputer>scorePlayer){
        console.log("the Computer won!")
    } else if(scoreComputer===scorePlayer){
        console.log("you drawed!");
    } else {
        console.log("You won! Game over!");
    }
    scoreComputer = 0;
    scorePlayer = 0;
}

