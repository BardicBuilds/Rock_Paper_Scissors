
// Declare Variables //
let playerTotal = 0
let computerTotal = 0


const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
    return userInput;
  } else {
    console.log('Please enter a valid play. "rock", "paper", or "scissors".')
  }
};

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }  
}


let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
     return 'It\'s a tie!';
  } 
  if (userChoice === 'rock'){ 
    if(computerChoice === 'paper'){
      computerTotal += 1
      return'Paper beats rock. The computer won :p';
    } else {
      playerTotal +=1
      return 'Rock crushes scissors. You win!';
      }
    } 
  if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      computerTotal += 1
      return 'Scissors cut paper. The computer wins ;P';
    } else {
      playerTotal +=1
      return "Paper covers rock. You win!";
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      computerTotal += 1
      return 'Rock crushes scissors. The computer wins :D';
    } else {
      playerTotal +=1
      return 'Scissors cut paper! You win!';
    }
  }
}

function playGame(){
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`The player chooses ${userChoice}.`);
  console.log(`The computer chooses ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice)); 

};


playGame()