# Pop Quiz: JavaScript!

This is an application that presents users with a multiple choice quiz, times them, and then adds up their final score. Users are able to store their names along with their scores into local storage to see them later.
The quiz runs completely on the browser and features dynamically updated HTML and CSS stylings, along with responsive design for any screen size.

![Quiz Start Screen](/assets/screenshots/pop_quiz_title.PNG?raw=true "Quiz Start Screen")

The user interface is clean and is able to indicate whether a correct (green) or incorrect(red) answer is selected. An incorrect response also flashes the timer color yellow to indicate a time penalty. A correct responses flashes the score display with green to indicate an increase in score points.

![Incorrect response!](/assets/screenshots/pop_quiz_incorrect.PNG?raw=true "Quiz question sample")

After the user reaches the end of the quiz, or the time is up, a game over pop-up screen is displayed. The resulting score is shown along with an `<input>` field to enter your name. Any previous scores from local storage are displayed as well. A `clear` button clears all previous scores from the list, and a `retake` button takes you back to the start screen.

![The Game Over pop-up](/assets/screenshots/pop_quiz_gameover.PNG?raw=true "Game over and previous scores")

This application was completed with help from Javascript and its event listeners that trigger functions handling CSS events and DOM manipulation.

### Links

- [Repository](https://github.com/jfrausto/javascript-pop-quiz)
- [GitHub Page](https://jfrausto.github.io/javascript-pop-quiz/)
