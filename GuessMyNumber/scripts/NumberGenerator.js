let randomNum = Math.floor(Math.random()*100)+1;
console.log(randomNum);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const remainingChancesText = document.querySelector('.remainingChances');

let guessCount = 1;
let resetButton;
let remainingChances = 9;

function checkGuess(){
    
    let userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = 'previous guess: ';
    }

    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNum){
        lowOrHi.textContent = ' ';
        alert('Congrats!. Perfect Guess!! \n No. of Guesses: ' + guessCount-1);
        setGameOver();

    }
    else if(guessCount === 10){
        lowOrHi.textContent = '';
        alert('GameOver, Try again ?');
        setGameOver();
    }
    else{
        lastResult.textContent = 'Wrong!';
        if(userGuess < randomNum){
            lowOrHi.textContent='last guess was too low';
        }
        else if(userGuess > randomNum){
            lowOrHi.textContent='last guess was too high';
        }
        remainingChancesText.textContent = "attempt left: "+remainingChances--;
        //console.log(remainingChances);
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
    remainingChancesText.textContent = "attempt left: --";
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start new Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    remainingChances = 9;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i=0;i<resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNum = Math.floor(Math.random()*100)+1;
};