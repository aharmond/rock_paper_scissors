var choices = ["Rock", "Paper", "Scissors"];

var playerChoice = [];
var opponentChoice = [];

var result = document.getElementById("result");
var pchoice = document.getElementById("pchoice");
var ochoice = document.getElementById("ochoice");

var choiceOne = document.getElementById("choice-one");
var choiceTwo = document.getElementById("choice-two");
var choiceThree = document.getElementById("choice-three");

choiceOne.addEventListener("click", function() {
  makeChoice(choiceOne);
  playGame(playerChoice);
});
choiceTwo.addEventListener("click", function() {
  makeChoice(choiceTwo);
  playGame(playerChoice);
});
choiceThree.addEventListener("click", function() {
  makeChoice(choiceThree);
  playGame(playerChoice);
});

function makeChoice(choice) {
  playerChoice = choices.filter( function(choices){
    return choices === choice.innerHTML
  })
  playerChoice = playerChoice[0]
};

function playGame(choice) {
  opponentChoice = choices[Math.floor(Math.random()*choices.length)]
  pchoice.innerHTML = "Your choice: " + playerChoice;
  ochoice.innerHTML = "Opponent choice: " + opponentChoice;
  switch(playerChoice) {
    case "Rock":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Tie";
          break;
        case "Paper":
          result.innerHTML = "Loss";
          break;
        case "Scissors":
          result.innerHTML = "Win!";
          break;
      };
      break;
    case "Paper":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Win!";
          break;
        case "Paper":
          result.innerHTML = "Tie";
          break;
        case "Scissors":
          result.innerHTML = "Loss";
          break;
      };
      break;
    case "Scissors":
      switch (opponentChoice) {
        case "Rock":
          result.innerHTML = "Loss";
          break;
        case "Paper":
          result.innerHTML = "Win!";
          break;
        case "Scissors":
          result.innerHTML = "Tie";
          break;
      };
      break;
  };
}