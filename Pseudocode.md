Pseudocode

* Create a start button
* Add click event to start button, it should execute a function called startGame()
* target the innertext of the startGameButton to change to 'Play Again' once pressed
* Hide start button from screen
* Make keys active
* Generate a word to be guessed. Define an array of words. Use Math floor & random to get a random word from the array.
* Save random word to wordToGuess
* Display the correct amount of spaces using wordToGuess.length
* Using a 'for' loop, set it to loop wordToGuess.length amount of times
* In each loop: create a div, add class .guessed-letter, append to guessContainer
* Using the attemptsMade, update the attemptsWrapper with it's value.
* Create a click event on the keys within the keyboard
* Target the keys with .key class. Add a click event, executing submitLetter()
* AttemptsMade should increase by 1
* AttemptsSpan.innerText = attemptsMade
* If a letter has been guessed correctly, we should see the empty spaces fill with the correct letter
* Identify which letter has been clicked
* check every letter of wordToGuess, if it matches the clicked letter, display it
* if attemptsMade equals allowedAttempts, endGame()
* Update the messageDisplay when the game is lost with messageDisplay.innerText = 'You lost!'
* If wordToGuess.length equals correctGuesses, endGame()
* Update the messageDisplay when the game is won to messageDisplay.innerText = 'You won!'
* Click on the 'Play Again' button (start button) to reset and play again