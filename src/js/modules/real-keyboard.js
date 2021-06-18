const realKeyboard = () => {
  const textarea = document.querySelector('.textarea');
  const keys = document.querySelectorAll('.key');

  const keysKeyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 220,
    8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46, 20, 65, 83, 68,
    70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188,
    190, 191, 38, 16, 17, null, 18, 32, 18, 37, 40, 39, 17];

  textarea.addEventListener('keydown', (event) => {
    for (let i = 0; i < keysKeyCode.length; i += 1) {
      if (event.keyCode === keysKeyCode[i] && (i === 42 || i === 55 || i === 57)
      && event.location === 1) {
        keys[i].classList.add('active');
        break;
      } else if (event.keyCode === keysKeyCode[i] && (i === 54 || i === 59 || i === 63)
      && event.location === 2) {
        keys[i].classList.add('active');
        break;
      } else if (event.keyCode === keysKeyCode[i] && event.location === 0) {
        keys[i].classList.add('active');
      }
    }
  });

  textarea.addEventListener('keyup', (event) => {
    for (let i = 0; i < keysKeyCode.length; i += 1) {
      if (event.keyCode === keysKeyCode[i]) {
        keys[i].classList.remove('active');
      }
    }
  });
};

export default realKeyboard;
