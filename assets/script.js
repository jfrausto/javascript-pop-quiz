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
function startQuiz(event) {
  event.preventDefault(); // maybe not work because of event passing
  titleDisplay.hidden = true;
  startButton.hidden = true;
  score = 0;
  questionDisplay.hidden = false;
  scoreDisplay.textContent = "Score: " + score;
  scoreDisplay.hidden = false;
  timerDisplay.hidden = false; // could be put in function instead

  setTime();
}

function setTime() {
  var timerInterval = setInterval(function () {
    currentTime--;
    timerDisplay.textContent = "Time: " + currentTime;

    if (currentTime <= 0) {
      clearInterval(timerInterval);
      // "YOU LOSE" FUNCTION,CONDITION,OR ACTION HERE
    }
  }, 1000);
}

startButton.addEventListener("click", startQuiz);
