const choices = ['Rock','Paper','Scissors'];
document.addEventListener('DOMContentLoaded', () =>{
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("clicked button");
        playGame(button.getAttribute('id'));
    });
});
});


function getComputerChoice(){
    const computerSelection = choices[Math.floor(Math.random()*3)];
    return computerSelection;
}

console.log(getComputerChoice());


function playRound(playerSelection, computerSelection){
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "It's a draw";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection ==='rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'){
                return "You Win!! " + playerSelection + " beats " + computerSelection;
    }
    else{
        return "You Lose " + computerSelection + " beats " + playerSelection;
    }
} 

function playGame(playerSelection){
        const computerSelection = getComputerChoice();
        console.log("Computer picked " + computerSelection);
        console.log("You picked " + playerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Thanks for playing");
}
console.log(getComputerChoice());
