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
var score = 0;
var currentQuestion = 0; // keep adding to it to access others in the quiz Index

var dataTypeQ = {
  question: "Which of the following data types is NOT supported in JavaScript?",
  answers: ["boolean", "number", "bit", "string"],
  correctAnswer: "bit",
};
var selectHeaderQ = {
  question: "Which is a valid way to concatenate an empty string? result = '';",
  answers: [
    "result = result + someOtherString;",
    "result += someOtherString;",
    "result = result.concat(someOtherString);",
    "All of the above",
  ],
  correctAnswer: "All of the above",
};

var quizQuestionsArray = [dataTypeQ, selectHeaderQ];
console.log(quizQuestionsArray[1]);
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
  renderQuestion();
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

function renderQuestion() {
  quizQuestion.textContent = quizQuestionsArray[currentQuestion].question;
  answerOne.textContent = quizQuestionsArray[currentQuestion].answers[0];
  answerTwo.textContent = quizQuestionsArray[currentQuestion].answers[1];
  answerThree.textContent = quizQuestionsArray[currentQuestion].answers[2];
  answerFour.textContent = quizQuestionsArray[currentQuestion].answers[3];
}

startButton.addEventListener("click", startQuiz);
