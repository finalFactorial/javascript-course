'use strict';

// cached elements
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');
const btnCloseModalEl = document.querySelector('.close-modal');

let lastFocusedButton = null;

const openModal = function () {
  modalEl.classList.remove('hidden');

  overlayEl.classList.remove('hidden');

  modalEl.focus();

  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');

  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

// event listeners
btnsOpenModalEl.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModalEl.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// screen readers
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close-modal');