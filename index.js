var readlineSync = require("readline-sync");

var score = 0;

// data of high score


// array of objects
var questions = [{
  question: "What was the first marvel movie ? ",
  answer: "Iron man"
}, {
  question: " Where is Captain America came from",
  answer: "Brooklyn"
},
{
  question: "How many Infinity Stones are there ?",
  answer: "6"
},
{
  question: "Who is the father of Tony stark? ",
  answer: "Howard stark"
},
{
  question: "Who is the female lead in Wanda Vision? ",
  answer:"Elizabeth Olsen"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " It's a quiz based on Marvel?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

}


welcome();
game();
showScores();
