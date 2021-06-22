const changeTheme = () => {
  const body = document.querySelector('body');
  const container = document.getElementById('app');
  const textarea = document.querySelector('.textarea');
  const keyboard = document.querySelector('.keyboard');
  const keys = document.querySelectorAll('.key');
  const side = document.querySelectorAll('.side-key');
  const sideRus = document.querySelectorAll('.side-key-rus');
  const checkbox = document.querySelector('.dark-theme__checkbox');

  const switchTheme = () => {
    keys.forEach((key) => {
      key.classList.toggle('key_dark-theme');
    });

    side.forEach((key) => {
      key.classList.toggle('side-key_dark-theme');
    });

    sideRus.forEach((key) => {
      key.classList.toggle('side-key_dark-theme');
    });
    body.classList.toggle('body-dark-theme');
    container.classList.toggle('app_dark-theme');
    textarea.classList.toggle('textarea_dark-theme');
    keyboard.classList.toggle('keyboard_dark-theme');
  };

  if (localStorage.getItem('dark-theme')) {
    checkbox.checked = true;
    switchTheme();
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      localStorage.setItem('dark-theme', true);
    } else {
      localStorage.removeItem('dark-theme');
    }
    switchTheme();
  });
};

export default changeTheme;
