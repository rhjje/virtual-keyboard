const speechRecognition = () => {
  const textarea = document.querySelector('.textarea');
  const language = document.querySelector('.language');
  const button = document.querySelector('.microphone');

  try {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SpeechRecognition();
    rec.interimResults = true;
    rec.continuous = true;
    rec.lang = 'en-gb';

    rec.addEventListener('result', (event) => {
      const text = Array.from(event.results)
        .map((res) => res[0])
        .map((res) => res.transcript)
        .join('');
      textarea.value = text;
    });

    button.addEventListener('click', () => {
      if (language.innerText === 'En') {
        rec.lang = 'en-gb';
      } else {
        rec.lang = 'ru';
      }

      if (button.classList.contains('microphone_disabled')) {
        button.firstChild.src = 'assets/icons/microphone.svg';
        button.classList.remove('microphone_disabled');
        rec.start();
      } else {
        rec.stop();
        button.firstChild.src = 'assets/icons/microphone-off.svg';
        button.classList.add('microphone_disabled');
      }
    });
  } catch (error) {
    button.style.display = 'none';
  }
};

export default speechRecognition;
