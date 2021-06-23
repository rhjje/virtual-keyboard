import renderTextarea from './modules/render-textarea';
import renderControlPanel from './modules/render-control-panel';
import renderKeyboard from './modules/render-keyboard';
import app from './modules/app';
import realKeyboard from './modules/real-keyboard';
import setSwitches from './modules/set-switches';
import speechRecognition from './modules/speech-recognition';

document.addEventListener('DOMContentLoaded', () => {
  renderTextarea();
  renderControlPanel();
  renderKeyboard();
  app();
  realKeyboard();
  setSwitches();
  speechRecognition();
});
