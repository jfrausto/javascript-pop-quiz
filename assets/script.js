// element selectors
var scoreDisplay = document.querySelector("#custom-score");
var timerDisplay = document.querySelector("#custom-timer");
var titleDisplay = document.querySelector("#custom-header");
var startButton = document.querySelector("#start-button");
var questionDisplay = document.querySelector("#question-display");
var quizQuestion = document.querySelector("#quiz-question");
var answerOne = document.querySelector("#answer1");
var answerTwo = document.querySelector("#answer2");
var answerThree = document.querySelector("#answer3");
var answerFour = document.querySelector("#answer4");

var currentTime = 60; //    start with a minute on the clock
var score;

// var quizQuestions = [

// ];
scoreDisplay.hidden = true; //  hide score, timer, and q&a areas
timerDisplay.hidden = true;
questionDisplay.hidden = true;

// scoreDisplay.hidden = false; //  hide score and timer areas
// timerDisplay.hidden = false;
// questionDisplay.hidden = false;
function startQuiz() {
  titleDisplay.hidden = true;
  startButton.hidden = true;
  score = 0;
  questionDisplay.hidden = false;
  scoreDisplay.textContent = "Score: " + score;
  scoreDisplay.hidden = false;

  timerDisplay.hidden = false; // could be put in function instead
}

startButton.addEventListener("click", startQuiz);
