var choices = ["Rock", "Paper", "Scissors"];

var playerChoice = [];
var opponentChoice = [];

var result = document.getElementById("result");
var pChoice = document.getElementById("pchoice");
var oChoice = document.getElementById("ochoice");

var wins = 0
var losses = 0
var ties = 0
var wPercent = 0
var lPercent = 0
var tPercent = 0
var total = 0
var gameResult = ""

var scoreWin = document.getElementById("wins");
var scoreLoss = document.getElementById("losses");
var scoreTie = document.getElementById("ties");
var winPercent = document.getElementById("winpercent")
var lossPercent = document.getElementById("losepercent")
var tiePercent = document.getElementById("tiepercent")
var reset = document.getElementById("reset");

var choiceOne = document.getElementById("choice-one");
var choiceTwo = document.getElementById("choice-two");
var choiceThree = document.getElementById("choice-three");

choiceOne.addEventListener("click", function() {
  playerChoice = 0
  makeChoice(playerChoice);
  playGame(playerChoice);
  score(gameResult);
  percent();
});
choiceTwo.addEventListener("click", function() {
  playerChoice = 1
  makeChoice(playerChoice);
  playGame(playerChoice);
  score(gameResult);
  percent();
});
choiceThree.addEventListener("click", function() {
  playerChoice = 2
  makeChoice(playerChoice);
  playGame(playerChoice);
  score(gameResult);
  percent();
});
reset.addEventListener("click", function() {
  wins = 0
  losses = 0
  ties = 0
  result.innerHTML = "Result"
  result.classList.remove('win', 'loss', 'tie')
  score();
  resetpercent();
});

function makeChoice(choice) {
  return playerChoice = choices[choice]
};

function playGame(choice) {
  opponentChoice = choices[Math.floor(Math.random()*choices.length)]
  pChoice.innerHTML = "Your choice: " + playerChoice;
  oChoice.innerHTML = "Opponent choice: " + opponentChoice;
  result.classList.remove('win', 'loss', 'tie')
  switch(playerChoice) {
    case "Rock":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Tie";
          result.classList.add('tie');
          gameResult = "Tie";
          break;
        case "Paper":
          result.innerHTML = "Loss";
          result.classList.add('loss')
          gameResult = "Loss";
          break;
        case "Scissors":
          result.innerHTML = "Win!";
          result.classList.add('win')
          gameResult = "Win";
          break;
      };
      break;
    case "Paper":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Win!";
          result.classList.add('win')
          gameResult = "Win";
          break;
        case "Paper":
          result.innerHTML = "Tie";
          result.classList.add('tie');
          gameResult = "Tie";
          break;
        case "Scissors":
          result.innerHTML = "Loss";
          result.classList.add('loss')
          gameResult = "Loss";
          break;
      };
      break;
    case "Scissors":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Loss";
          result.classList.add('loss')
          gameResult = "Loss";
          break;
        case "Paper":
          result.innerHTML = "Win!";
          result.classList.add('win')
          gameResult = "Win";
          break;
        case "Scissors":
          result.innerHTML = "Tie";
          result.classList.add('tie');
          gameResult = "Tie";
          break;
      };
      break;
  };
};

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
  };
};

function percent() {
  total = wins + losses + ties
  wPercent = Math.round((wins / total) * 100)
  lPercent = Math.round((losses / total) * 100)
  tPercent = Math.round((ties / total) * 100)
  winPercent.innerHTML = wPercent + "%";
  lossPercent.innerHTML = lPercent + "%";
  tiePercent.innerHTML = tPercent + "%";
};

function resetpercent() {
  total = 0
  wPercent = 0
  lPercent = 0
  tPercent = 0
  winPercent.innerHTML = wPercent + "%";
  lossPercent.innerHTML = lPercent + "%";
  tiePercent.innerHTML = tPercent + "%";
}