import { state } from './script';

const soundButton = document.querySelector('.sound > img');

soundButton.addEventListener('click', () => {
  if (soundButton.classList.contains('off')) {
    soundButton.src = 'assets/icons/volume.svg';
  } else {
    soundButton.src = 'assets/icons/volume-off.svg';
  }
  state.sound = !state.sound;
  soundButton.classList.toggle('off');
});
