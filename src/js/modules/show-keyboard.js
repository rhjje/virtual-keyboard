const showKeyboard = () => {
  const keyboard = document.querySelector('.keyboard');

  document.querySelector('input[type=checkbox]').addEventListener('change', (event) => {
    if (event.target.checked) {
      keyboard.classList.remove('keyboard-off');
    } else {
      keyboard.classList.add('keyboard-off');
    }
  });
};

export default showKeyboard;
