const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
    
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "It's a draw!";
    }
    else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return "You Win " + playerSelection + " beats " + computerSelection;
    }
    else{
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

/*console.log("Computer picked " + computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

function playGame(){
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter your choice!");
        console.log("Computer picked " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Thank you for playing!");
}

playGame();