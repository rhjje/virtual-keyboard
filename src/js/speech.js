window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();
rec.interimResults = true;
rec.continuous = true;
rec.lang = 'en-gb';

document.querySelector('div.key.win').addEventListener('click', () => {
  if (languageEnglish) {
    rec.lang = 'en-gb';
  } else {
    rec.lang = 'ru';
  }
});

rec.addEventListener('result', () => {
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  textarea.value = text;
});

const microphoneButton = document.querySelector('.microphone > img');
microphoneButton.addEventListener('click', () => {
  if (microphoneButton.classList.contains('off')) {
    microphoneButton.src = 'assets/icons/microphone.svg';
    microphoneButton.classList.remove('off');
    rec.start();
  } else {
    rec.stop();
    microphoneButton.src = 'assets/icons/microphone-off.svg';
    microphoneButton.classList.add('off');
  }
});
