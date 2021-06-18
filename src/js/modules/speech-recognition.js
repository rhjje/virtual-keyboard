const speechRecognition = () => {
  const textarea = document.querySelector('.textarea');
  const language = document.querySelector('.language');
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const rec = new SpeechRecognition();
  rec.interimResults = true;
  rec.continuous = true;
  rec.lang = 'en-gb';

  rec.addEventListener('result', (e) => {
    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');
    textarea.value = text;
  });

  const microphoneButton = document.querySelector('.microphone > img');
  microphoneButton.addEventListener('click', () => {
    if (language.innerText === 'En') {
      rec.lang = 'en-gb';
    } else {
      rec.lang = 'ru';
    }

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
};

export default speechRecognition;
