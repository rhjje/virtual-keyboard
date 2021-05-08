const modalWindowButton = document.querySelector('div.info > img');
const modalWindow = document.querySelector('.info-modal');
const modalWindowBackground = document.querySelector('.modal-background');
const closeModalButton = document.querySelector('.close>img');

modalWindowButton.addEventListener('click', () => {
  modalWindow.classList.remove('disabled-modal');
  modalWindowBackground.classList.remove('disabled-modal');
});

closeModalButton.addEventListener('click', () => {
  modalWindow.classList.add('disabled-modal');
  modalWindowBackground.classList.add('disabled-modal');
});

modalWindowBackground.addEventListener('click', () => {
  modalWindow.classList.add('disabled-modal');
  modalWindowBackground.classList.add('disabled-modal');
});
