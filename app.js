
/*-------------- Constants -------------*/
const allowedGuesses = 8
const snowManWords = ['school', 'girl', 'snow','flower','butterfly','duck','cat','dog','cake', 'monkey','bell','window']


/*---------- Variables (state) ---------*/

let attemptsMade = 1 
let correctGuesses = 0 
let wordToGuess = [];
let currentWord
let letterEls = []

// * ---- DOM Elements ----
const startGameButton = document.querySelector('.start-game')
const attemptsWrapper = document.querySelector('.attempts-wrapper')
const snowmanImage = document.querySelector('#snowman-img')
const guessContainer = document.querySelector('.guess-container')
const keyElements = document.querySelectorAll('.key')
const messageDisplay = document.querySelector('.message')
const playAgainButton = document.querySelector('.play-again')




// * ---- Functions ----

//to hide buttons once clicked
const hide = () => {
    
}

//to initiate game
const startGame = () => {
    letterEls = []
    startGameButton.innerText = 'Play Again'
    keyElements.forEach(key => key.disabled = false)
    startGameButton.classList.add('hide')
    attemptsMade = 1
    correctGuesses = 0
    messageDisplay.innerText = ''
    guessContainer.innerHTML = ''
    wordToGuess = snowManWords[Math.floor(Math.random() * snowManWords.length)];
   
    for (let i = 0; i < wordToGuess.length; i++) {

    let newDiv = document.createElement('div')
    newDiv.classList.add('letter-space')
    letterEls.push(newDiv)
    guessContainer.appendChild(newDiv)
    
    updateUI()
   
    }}


const key = () => {}

const updateUI = () => {
    attemptsWrapper.innerText = `❤️ ${allowedGuesses-attemptsMade}`
    snowmanImage.src = `Images/Snowman-${attemptsMade}.jpg`
}


const increaseAttempts = () => {
    attemptsMade += 1

    updateUI()

}


const submitLetter = (evt) => {

    const key = evt.target.innerText
    evt.target.disabled = true
    if (wordToGuess.includes(key)) {
        for (let i in wordToGuess) {
            if (wordToGuess[i] === key) {
                letterEls[i].innerText = key.toUpperCase()
                correctGuess()
            }
        }

    } else {
        increaseAttempts()
    } if (attemptsMade === allowedGuesses) {
        endGame(' You Lose! 😭')
    } 
    
    if (wordToGuess.length === correctGuesses){ 
        endGame('You Win!😁')    
    }}

const endGame = (message) => {
    messageDisplay.innerText = message
    keyElements.forEach(key => key.disabled = true);
    startGameButton.classList.remove('hide')
   }

const correctGuess = () => {
    correctGuesses ++ 

    updateUI()}


    // * ---- Events ----
 

startGameButton.addEventListener('click', startGame)
keyElements.forEach(el => el.addEventListener('click', submitLetter))
