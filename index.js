var choices = ["Rock", "Paper", "Scissors"];

var playerChoice = [];
var opponentChoice = [];

var result = document.getElementById("result");
var pChoice = document.getElementById("pchoice");
var oChoice = document.getElementById("ochoice");

var wins = 0
var losses = 0
var ties = 0
var gameResult = ""

var scoreWin = document.getElementById("wins");
var scoreLoss = document.getElementById("losses");
var scoreTie = document.getElementById("ties");
var reset = document.getElementById("reset");

var choiceOne = document.getElementById("choice-one");
var choiceTwo = document.getElementById("choice-two");
var choiceThree = document.getElementById("choice-three");

choiceOne.addEventListener("click", function() {
  playerChoice = 0
  makeChoice(playerChoice);
  playGame(playerChoice);
  score(gameResult);
});
choiceTwo.addEventListener("click", function() {
  playerChoice = 1
  makeChoice(playerChoice);
  playGame(playerChoice);
  score(gameResult);
});
choiceThree.addEventListener("click", function() {
  playerChoice = 2
  makeChoice(playerChoice);
  playGame(playerChoice);
  score(gameResult);
});
reset.addEventListener("click", function() {
  wins = 0
  losses = 0
  ties = 0
  score();
})

function makeChoice(choice) {
  return playerChoice = choices[choice]
};

function playGame(choice) {
  opponentChoice = choices[Math.floor(Math.random()*choices.length)]
  pChoice.innerHTML = "Your choice: " + playerChoice;
  oChoice.innerHTML = "Opponent choice: " + opponentChoice;
  switch(playerChoice) {
    case "Rock":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Tie";
          gameResult = "Tie";
          break;
        case "Paper":
          result.innerHTML = "Loss";
          gameResult = "Loss";
          break;
        case "Scissors":
          result.innerHTML = "Win!";
          gameResult = "Win";
          break;
      };
      break;
    case "Paper":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Win!";
          gameResult = "Win";
          break;
        case "Paper":
          result.innerHTML = "Tie";
          gameResult = "Tie";
          break;
        case "Scissors":
          result.innerHTML = "Loss";
          gameResult = "Loss";
          break;
      };
      break;
    case "Scissors":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Loss";
          gameResult = "Loss";
          break;
        case "Paper":
          result.innerHTML = "Win!";
          gameResult = "Win";
          break;
        case "Scissors":
          result.innerHTML = "Tie";
          gameResult = "Tie";
          break;
      };
      break;
  };
}

function score(gameResult) {
  scoreWin.innerHTML = "Wins: " + wins;
  scoreLoss.innerHTML = "Losses: " + losses;
  scoreTie.innerHTML = "Ties: " + ties;
  switch (gameResult) {
    case "Win":
      wins += 1;
      scoreWin.innerHTML = "Wins: " + wins;
      break;
    case "Loss":
      losses += 1;
      scoreLoss.innerHTML = "Losses: " + losses;
      break;
    case "Tie":
      ties += 1;
      scoreTie.innerHTML = "Ties: " + ties;
      break;
    default:
      break;
  }
}