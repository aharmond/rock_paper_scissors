var choices = ["Rock", "Paper", "Scissors"];

var playerChoice = [];
var opponentChoice = [];

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
};