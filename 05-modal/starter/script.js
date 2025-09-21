'use strict';

// cached elements
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');
const btnCloseModalEl = document.querySelector('.close-modal');

const openModal = function () {
    modalEl.classList.remove('hidden');

    overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
};

// event listeners
btnsOpenModalEl.forEach(btn => { btn.addEventListener('click', openModal) });

btnCloseModalEl.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);


