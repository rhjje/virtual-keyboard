export const textarea = document.querySelector('.textarea');
export const keys = document.querySelectorAll('.key');

export const state = {
  sound: true,
  shift: false,
  englishLayout: true,
};

const audioSimple = new Audio('assets/sounds/simple.wav');
const audio = new Audio('assets/sounds/key.wav');
const audioSimpleRus = new Audio('assets/sounds/key-simple-rus.wav');
const audioRus = new Audio('assets/sounds/key-rus.wav');

const changeLanguage = () => {
  const sideKeys = document.querySelectorAll('.side-key');
  const mainKeys = document.querySelectorAll('.main-key');
  const sideKeysRus = document.querySelectorAll('.side-key-rus');
  const mainKeysRus = document.querySelectorAll('.main-key-rus');

  const language = document.querySelector('.language');
  const languageSide = document.querySelector('.language-side');
  [language.innerText, languageSide.innerText] = [languageSide.innerText, language.innerText];

  for (let i = 0; i < sideKeys.length; i += 1) {
    sideKeys[i].classList.toggle('disabled');
    mainKeys[i].classList.toggle('disabled');
    sideKeysRus[i].classList.toggle('disabled');
    mainKeysRus[i].classList.toggle('disabled');
  }
  state.englishLayout = !state.englishLayout;
};

const backspace = () => {
  const firstString = textarea.value.slice(0, textarea.selectionStart);
  const secondString = textarea.value.slice(textarea.selectionEnd);
  const positionFocus = textarea.selectionStart;

  textarea.value = firstString.slice(0, -1) + secondString;
  textarea.focus();
  if (positionFocus > 0) {
    textarea.setSelectionRange(positionFocus - 1, positionFocus - 1);
  } else {
    textarea.setSelectionRange(positionFocus, positionFocus);
  }
};

const deleteButton = () => {
  const firstString = textarea.value.slice(0, textarea.selectionStart);
  const secondString = textarea.value.slice(textarea.selectionEnd);
  const positionFocus = textarea.selectionStart;

  textarea.value = firstString + secondString.slice(1);
  textarea.focus();
  if (positionFocus < textarea.value.length) {
    textarea.setSelectionRange(positionFocus, positionFocus);
  } else {
    textarea.setSelectionRange(positionFocus, positionFocus);
  }
};

const changeCase = () => {
  const keysAll = document.querySelectorAll('.key');
  keysAll.forEach((key) => {
    if (key.querySelector('.side-key')) {
      const sideKey = key.querySelector('.side-key');
      const mainKey = key.querySelector('.main-key');
      const sideKeyRus = key.querySelector('.side-key-rus');
      const mainKeyRus = key.querySelector('.main-key-rus');

      [mainKey.innerHTML, sideKey.innerHTML] = [sideKey.innerHTML, mainKey.innerHTML];
      [mainKeyRus.innerHTML, sideKeyRus.innerHTML] = [sideKeyRus.innerHTML, mainKeyRus.innerHTML];
    }
  });
};

const shift = () => {
  const keysAll = document.querySelectorAll('.key');
  keysAll[42].classList.toggle('active');
  keysAll[54].classList.toggle('active');
  state.shift = !state.shift;
};

const left = () => {
  const positionFocus = textarea.selectionStart;

  textarea.focus();
  if (positionFocus > 0) {
    textarea.setSelectionRange(positionFocus - 1, positionFocus - 1);
  } else {
    textarea.setSelectionRange(positionFocus, positionFocus);
  }
};

const right = () => {
  const positionFocus = textarea.selectionStart;

  textarea.focus();
  if (positionFocus < textarea.value.length) {
    textarea.setSelectionRange(positionFocus + 1, positionFocus + 1);
  } else {
    textarea.setSelectionRange(positionFocus, positionFocus);
  }
};

const up = () => {
  const positionFocus = textarea.selectionStart;

  textarea.focus();
  if (positionFocus > 0) {
    const count = textarea.value.slice(0, textarea.selectionStart).length;
    textarea.setSelectionRange(positionFocus - count, positionFocus - count);
  } else {
    textarea.setSelectionRange(positionFocus, positionFocus);
  }
};

const down = () => {
  const positionFocus = textarea.selectionStart;

  textarea.focus();
  if (positionFocus < textarea.value.length) {
    const count = textarea.value.slice(textarea.selectionEnd).length;
    textarea.setSelectionRange(positionFocus + count, positionFocus + count);
  } else {
    textarea.setSelectionRange(positionFocus, positionFocus);
  }
};

const setSpace = (space) => {
  textarea.setRangeText(`${space}`, textarea.selectionStart, textarea.selectionEnd, 'end');
  textarea.focus();
};

const writeLetter = (char) => {
  textarea.setRangeText(char, textarea.selectionStart, textarea.selectionEnd, 'end');
  textarea.focus();
};

const playSound = () => {
  if (state.englishLayout) {
    audioSimple.play();
  } else {
    audioSimpleRus.play();
  }
};

const playSpecialSound = () => {
  if (state.englishLayout) {
    audio.play();
  } else {
    audioRus.play();
  }
};

keys.forEach((key) => {
  key.addEventListener('click', (event) => {
    switch (event.target.innerText) {
      case 'Ru':
      case 'En':
      case 'Win':
        if (state.sound) audioRus.play();
        changeLanguage();
        break;
      case 'Tab':
        if (state.sound) playSpecialSound();
        setSpace('    ');
        break;
      case 'Backspace':
        if (state.sound) playSpecialSound();
        backspace();
        break;
      case 'Delete':
        if (state.sound) playSpecialSound();
        deleteButton();
        break;
      case 'CapsLock':
        if (state.sound) playSpecialSound();
        changeCase();
        key.classList.toggle('active');
        break;
      case 'Enter':
        if (state.sound) playSpecialSound();
        setSpace('\n');
        break;
      case 'Shift':
        if (state.sound) playSpecialSound();
        changeCase();
        shift();
        break;
      case 'Ctrl':
      case 'Alt':
        if (state.sound) playSpecialSound();
        break;
      case 'Space':
        if (state.sound) playSound();
        setSpace(' ');
        break;
      case 'Left':
        if (state.sound) playSpecialSound();
        left();
        break;
      case 'Right':
        if (state.sound) playSpecialSound();
        right();
        break;
      case 'Up':
        if (state.sound) playSpecialSound();
        up();
        break;
      case 'Down':
        if (state.sound) playSpecialSound();
        down();
        break;
      default:
        if (state.englishLayout) {
          if (state.sound) {
            audioSimple.play();
          }
          const span = key.querySelector('.main-key');
          writeLetter(span.innerText);
        } else {
          if (state.sound) {
            audioSimpleRus.play();
          }
          const span = key.querySelector('.main-key-rus');
          writeLetter(span.innerText);
        }

        if (state.shift) {
          changeCase();
          shift();
          state.shift = false;
        }
        break;
    }
  });
});
