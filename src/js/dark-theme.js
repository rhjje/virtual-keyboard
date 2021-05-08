const body = document.querySelector('body');
const side = document.querySelectorAll('.side-key');
const sideRus = document.querySelectorAll('.side-key-rus');
const keys = document.querySelectorAll('.key');
const keyboard = document.querySelector('.keyboard');
const textarea = document.querySelector('.textarea');
const main = document.querySelector('.main');

document.querySelector('div.dark-theme > label > input[type=checkbox]').addEventListener('change', () => {
  keys.forEach((key) => {
    key.classList.toggle('dark-theme-keys');
  });

  side.forEach((key) => {
    key.classList.toggle('dark-theme-side-key');
  });

  sideRus.forEach((key) => {
    key.classList.toggle('dark-theme-side-key');
  });

  keyboard.classList.toggle('dark-theme-keyboard');
  body.classList.toggle('dark-theme-bg');
  main.classList.toggle('dark-theme-main');
  textarea.classList.toggle('dark-theme-textarea');
});
