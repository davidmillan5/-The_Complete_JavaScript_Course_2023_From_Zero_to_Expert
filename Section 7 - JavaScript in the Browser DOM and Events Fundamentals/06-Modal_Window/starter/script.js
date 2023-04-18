'use strict';

const btnShowModal = document.querySelectorAll('.show-modal'),
  modal = document.querySelector('.modal'),
  btnCloseModal = document.querySelector('.close-modal'),
  overlay = document.querySelector('.overlay');
// console.log(btnShowModal);

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let btn in btnShowModal) {
  btnShowModal[btn].addEventListener('click', showModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
