'use strict';

// DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log('Message element: ', messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from JavaScript!';

const scoreEl = document.querySelector('.score');
console.log('Score element: ', scoreEl);
console.log(scoreEl.textContent);
// scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = '15';

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = '100';

const guessInput = document.querySelector('.guess');
// guessInput.value = '12';
console.log(guessInput.value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number: ', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button is clicked!');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player\'s guessed:', guess);

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'Too low!';
  }
});

