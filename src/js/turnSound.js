import { state } from './script';

const soundButton = document.querySelector('.sound > img');

soundButton.addEventListener('click', () => {
  if (soundButton.classList.contains('off')) {
    soundButton.src = 'assets/icons/volume.svg';
    state.sound = true;
  } else {
    soundButton.src = 'assets/icons/volume-off.svg';
    state.sound = false;
  }
  soundButton.classList.toggle('off');
});
