
/*-------------- Constants -------------*/
const allowedGuesses = 8
const snowManWords = [
    { word: 'school', hint: 'A place where you learn.' },
    { word: 'girl', hint: 'A young female.' },
    { word: 'snow', hint: 'White flakes falling from the sky in winter.' },
    { word: 'flower', hint: 'A blooming plant.' },
    { word: 'butterfly', hint: 'An insect with colorful wings.' },
    { word: 'duck', hint: 'A bird that swims.' },
    { word: 'cat', hint: 'A common household pet that purrs.' },
    { word: 'dog', hint: 'A common household pet that barks.' },
    { word: 'cake', hint: 'A sweet baked dessert.' },
    { word: 'monkey', hint: 'A primate often found in trees.' },
    { word: 'bell', hint: 'A device that rings.' },
    { word: 'window', hint: 'An opening in a wall to let light in.' }
]


/*---------- Variables (state) ---------*/

let attemptsMade = 1 
let correctGuesses = 0 
let wordToGuess = '';
let currentHint = '';
let letterEls = [];
let wins = 0;
let losses = 0;

// * ---- DOM Elements ----
const startGameButton = document.querySelector('.start-game')
const attemptsWrapper = document.querySelector('.attempts-wrapper')
const snowmanImage = document.querySelector('#snowman-img')
const guessContainer = document.querySelector('.guess-container')
const keyElements = document.querySelectorAll('.key')
const messageDisplay = document.querySelector('.message')
const winsDisplay = document.querySelector('#wins');
const lossesDisplay = document.querySelector('#losses');
const hintButton = document.querySelector('.show-hint');
const hintDisplay = document.querySelector('.hint');
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
    hintDisplay.innerText = '';
    attemptsMade = 1
    correctGuesses = 0
    messageDisplay.innerText = ''
    guessContainer.innerHTML = ''
    const selectedWord = snowManWords[Math.floor(Math.random() * snowManWords.length)];
    wordToGuess = selectedWord.word;
    currentHint = selectedWord.hint;


    for (let i = 0; i < wordToGuess.length; i++) {

    let newDiv = document.createElement('div')
    newDiv.classList.add('letter-space')
    letterEls.push(newDiv)
    guessContainer.appendChild(newDiv)
    
   
   
    }
    updateUI();
}




const updateUI = () => {
    attemptsWrapper.innerText = `❤️ ${allowedGuesses-attemptsMade}`
    snowmanImage.src = `Images/Snowman-${attemptsMade}.jpg`
}


const increaseAttempts = () => {
    attemptsMade += 1

    updateUI()

}


const submitLetter = (evt) => {

    const key = evt.target.innerText;
    evt.target.disabled = true;
    if (wordToGuess.includes(key)) {
        evt.target.classList.add('correct');
        for (let i in wordToGuess) {
            if (wordToGuess[i] === key) {
                letterEls[i].innerText = key.toUpperCase();
                correctGuesses += 1;
            }
        }
    } else {
        evt.target.classList.add('wrong');
        increaseAttempts();
    }
    if (attemptsMade === allowedGuesses) {
        endGame('You Lose! 😭', false);
    } else if (wordToGuess.length === correctGuesses) {
        endGame('You Win!😁', true);
    }
};

const endGame = (message, isWin) => {
    messageDisplay.innerText = message
    keyElements.forEach(key => key.disabled = true);
    startGameButton.classList.remove('hide')
    if (isWin) {
        wins += 1;
        winsDisplay.innerText = wins;
    } else {
        losses += 1;
        lossesDisplay.innerText = losses;
    }
}

    updateUI()

const showHint = () => {
    hintDisplay.innerText = `Hint: ${currentHint}`;
};


    // * ---- Events ----
 

startGameButton.addEventListener('click', startGame)
keyElements.forEach(el => el.addEventListener('click', submitLetter))
hintButton.addEventListener('click', showHint);
