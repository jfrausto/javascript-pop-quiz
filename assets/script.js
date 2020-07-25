// element selectors
var scoreDisplay = document.querySelector("#custom-score");
var timerDisplay = document.querySelector("#custom-timer");
var titleDisplay = document.querySelector("#custom-header");
var questionDisplay = document.querySelector("#question-display");
var quizQuestion = document.querySelector("#quiz-question");
var answerOne = document.querySelector("#answer1");
var answerTwo = document.querySelector("#answer2");
var answerThree = document.querySelector("#answer3");
var answerFour = document.querySelector("#answer4");

var score = 0;
var currentTime = 60; //    start with a minute on the clock

scoreDisplay.hidden = true; //  hide score, timer, and q&a areas
timerDisplay.hidden = true;
questionDisplay.hidden = true;

// scoreDisplay.hidden = false; //  hide score and timer areas
// timerDisplay.hidden = false;
// questionDisplay.hidden = false;
