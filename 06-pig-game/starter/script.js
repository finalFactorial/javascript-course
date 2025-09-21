'use strict';

console.log('Pig Game ready!');

let scores, currentScore, activePlayer, playing;

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const init = function () {
  // initialization
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // reset all display
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      currentScore = 0;

      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  }
});
