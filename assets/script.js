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
var gameOverDisplay = document.querySelector("#game-over");
var gameOverOverlay = document.querySelector("#overlay-background");
var gameOverScore = document.querySelector("#game-over-score");

gameOverDisplay.hidden = true;
gameOverOverlay.hidden = true;

var timerInterval; // make interval global
var currentTime = 60; //    start with a minute on the clock
var score = 0;
var currentQuestion = 0; // keep adding to it to access others in the quiz Index
// var thisAnswer; event.target for chosen answer

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

// start or restarting quiz; reset all visible sections and variables
function startQuiz(event) {
  event.preventDefault(); // maybe not work because of event passing
  gameOverDisplay.hidden = true;
  gameOverOverlay.hidden = true;
  titleDisplay.hidden = true;
  startButton.hidden = true;
  score = 0; // reset score
  currentTime = 60; //reset clock
  currentQuestion = 0; // reset to start of quiz
  // maybe include an array shuffle??? to randomize question order
  questionDisplay.hidden = false;
  scoreDisplay.textContent = "Score: " + score;
  scoreDisplay.hidden = false;
  timerDisplay.textContent = "Time: " + currentTime;
  timerDisplay.hidden = false; // could be put in function instead

  setTime();
  renderQuestion();
}

function setTime() {
  timerInterval = setInterval(function () {
    currentTime--;
    timerDisplay.textContent = "Time: " + currentTime;

    if (currentTime <= 0) {
      clearInterval(timerInterval);
      // "YOU LOSE" FUNCTION,CONDITION,OR ACTION HERE
      gameOver();
    }
    if (currentTime <= 10) {
      timerDisplay.setAttribute("style", "box-shadow: 0px 5px 0px red");
    }
  }, 1000);
}

// populates the question and answer fields
function renderQuestion() {
  // did we run out of questions? if so, game over.
  if (currentQuestion >= quizQuestionsArray.length) {
    gameOver();
  }
  // reset all of the stylings from right/wrong answers and displays
  answerOne.removeAttribute("style");
  answerTwo.removeAttribute("style");
  answerThree.removeAttribute("style");
  answerFour.removeAttribute("style");
  scoreDisplay.removeAttribute("style");
  timerDisplay.removeAttribute("style");
  // instead of rendering a question, check if we are done with questions
  // to display game over, score, and final time, and

  //reset to default 4 choices
  answerOne.hidden = false;
  answerTwo.hidden = false;
  answerThree.hidden = false;
  answerFour.hidden = false;

  if (quizQuestionsArray[currentQuestion].answers.length < 4) {
    //true of false question
    answerThree.hidden = true;
    answerFour.hidden = true;
  }

  //   populate next question and its answer choices
  quizQuestion.textContent = quizQuestionsArray[currentQuestion].question;
  // need to make this dynamic and not hard coded
  // answerOne.textContent = quizQuestionsArray[currentQuestion].answers[0];
  // answerTwo.textContent = quizQuestionsArray[currentQuestion].answers[1];
  // answerThree.textContent = quizQuestionsArray[currentQuestion].answers[2];
  // answerFour.textContent = quizQuestionsArray[currentQuestion].answers[3];
  // for (let i = 0; i < quizQuestionsArray[currentQuestion].answers.length ; i++) {
  //   const element = quizQuestionsArray[currentQuestion].answers.length
  // }

  // go print list of answers for however many answers there are
  // only <p> elements are the possible answer choices
  var listOfAnswers = document.querySelectorAll("p");
  for (var i = 0; i < quizQuestionsArray[currentQuestion].answers.length; i++) {
    listOfAnswers[i].textContent =
      quizQuestionsArray[currentQuestion].answers[i];
  }
}

function verifyResponse(event) {
  var thisAnswer = event.target;
  var timeOutId = 0;

  if (
    // correct choice!
    thisAnswer.textContent === quizQuestionsArray[currentQuestion].correctAnswer
  ) {
    thisAnswer.setAttribute(
      "style",
      "background-color: lightgreen; color:black"
    );
    score = score + 300;
    currentQuestion++; // go to next question
    scoreDisplay.textContent = "Score: " + score;
    scoreDisplay.setAttribute("style", "box-shadow: 0px 5px 0px lightgreen");
    timeOutID = window.setTimeout(renderQuestion, 600);
  } else {
    // wrong choice!
    thisAnswer.setAttribute("style", "background-color: red; color:black");
    timerDisplay.setAttribute("style", "box-shadow: 0px 5px 0px yellow");
    currentTime = currentTime - 7; // penalty, you got it wrong!
    currentQuestion++;
    timeOutID = window.setTimeout(renderQuestion, 600);
  }
}

function gameOver() {
  gameOverOverlay.hidden = false; // display overlay and game over screen
  gameOverDisplay.hidden = false;
  clearInterval(timerInterval); // freeze time
  gameOverScore.textContent = "Game Over! You got a score of " + score + "!";
}

startButton.addEventListener("mouseup", startQuiz);
answerOne.addEventListener("click", verifyResponse);
answerTwo.addEventListener("click", verifyResponse);
answerThree.addEventListener("click", verifyResponse);
answerFour.addEventListener("click", verifyResponse);
