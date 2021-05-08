const textarea = document.querySelector('.textarea');
const main = document.querySelector('.main');

// sound keyboard

const audioSimple = document.createElement('audio');
const sourceSimple = document.createElement('source');
sourceSimple.src = 'assets/sounds/simple.wav';
audioSimple.appendChild(sourceSimple);

const audio = document.createElement('audio');
const source = document.createElement('source');
source.src = 'assets/sounds/key.wav';
audio.appendChild(source);

const audioSimpleRus = document.createElement('audio');
const sourceSimpleRus = document.createElement('source');
sourceSimpleRus.src = 'assets/sounds/key-simple-rus.wav';
audioSimpleRus.appendChild(sourceSimpleRus);

const audioRus = document.createElement('audio');
const sourceRus = document.createElement('source');
sourceRus.src = 'assets/sounds/key-rus.wav';
audioRus.appendChild(sourceRus);

let soundTurn = true;

const soundButton = document.querySelector('.sound > img');
soundButton.addEventListener('click', () => {
  if (soundButton.classList.contains('off')) {
    soundButton.src = 'assets/icons/volume.svg';
    soundButton.classList.remove('off');
    soundTurn = true;
  } else {
    soundButton.src = 'assets/icons/volume-off.svg';
    soundButton.classList.add('off');
    soundTurn = false;
  }
});

const sideKeys = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Delete'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'],
];

const mainKeys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', null],
  [null, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', null],
  [null, 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', null],
  [null, 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', null],
];

const sideKeysRus = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', null],
  [null, 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', null],
  [null, 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', null],
  [null, 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', null],
];

const mainKeysRus = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', null],
  [null, 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', null],
  [null, 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', null],
  [null, 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', null],
];

const createKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard', 'keyboard-off');
  for (let i = 0; i < sideKeys.length; i += 1) {
    const row = document.createElement('div');
    switch (i) {
      case 0:
        row.classList.add('keyboard__row-first');
        break;
      case 1:
        row.classList.add('keyboard__row-second');
        break;
      case 2:
        row.classList.add('keyboard__row-third');
        break;
      case 3:
        row.classList.add('keyboard__row-fourth');
        break;
      case 4:
        row.classList.add('keyboard__row-fifth');
        break;
      default:
        break;
    }

    for (let j = 0; j < sideKeys[i].length; j += 1) {
      if (sideKeys[i][j].length === 1) {
        const key = document.createElement('div');
        key.classList.add('key');

        const spanSide = document.createElement('span');
        spanSide.classList.add('side-key');

        const spanMain = document.createElement('span');
        spanMain.classList.add('main-key');

        const spanSideRus = document.createElement('span');
        spanSideRus.classList.add('side-key-rus', 'disabled');

        const spanMainRus = document.createElement('span');
        spanMainRus.classList.add('main-key-rus', 'disabled');

        spanSide.innerText = sideKeys[i][j];
        spanMain.innerText = mainKeys[i][j];
        spanSideRus.innerText = sideKeysRus[i][j];
        spanMainRus.innerText = mainKeysRus[i][j];

        key.appendChild(spanSide);
        key.appendChild(spanMain);
        key.appendChild(spanSideRus);
        key.appendChild(spanMainRus);

        row.appendChild(key);
      } else {
        const key = document.createElement('div');
        key.classList.add('key');
        key.classList.add(`${sideKeys[i][j].toLowerCase()}`);
        const span = document.createElement('span');

        span.innerText = sideKeys[i][j];
        key.appendChild(span);
        row.appendChild(key);
      }
    }
    keyboard.appendChild(row);
  }

  main.appendChild(keyboard);
};

createKeyboard();

// create change language button

const buttonLanguage = document.querySelector('.key.win');

const createLanguageButton = () => {
  const spanRus = document.createElement('span');
  spanRus.classList.add('language-side');
  spanRus.innerText = 'Ru';

  const span = document.createElement('span');
  span.classList.add('language');
  span.innerText = 'En';

  buttonLanguage.appendChild(spanRus);
  buttonLanguage.appendChild(span);
};

createLanguageButton();

let shiftActive = false;
let languageEnglish = true;
const capslock = document.querySelector('.key.capslock');
const keyShift = document.querySelector('.key.shift');

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', (event) => {
    switch (event.target.innerText) {
      case 'Ru':
      case 'En':
      case 'Win':
        if (soundTurn) {
          audioRus.play();
        }
        changeLanguage();
        if (languageEnglish) {
          languageEnglish = false;
        } else {
          languageEnglish = true;
        }
        break;
      case 'Tab':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, "end");
        textarea.focus();
        break;
      case 'Backspace':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        backspace();
        break;
      case 'Delete':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        deleteButton();
        break;
      case 'CapsLock':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        shift();
        capslock.classList.toggle('active');
        break;
      case 'Enter':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, "end");
        textarea.focus();
        break;
      case 'Shift':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        shift();
        keys[42].classList.toggle('active');
        keys[54].classList.toggle('active');
        if (keys[42].classList.contains('active') && keys[54].classList.contains('active')) {
          shiftActive = true;
        } else {
          shiftActive = false;
        }
        break;
      case 'Ctrl':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        break;
      case 'Alt':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        break;
      case 'Space':
        if (languageEnglish && soundTurn) {
          audioSimple.play();
        } else if (soundTurn) {
          audioSimpleRus.play();
        }
        textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, "end");
        textarea.focus();
        break;
      case 'Left':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        left();
        break;
      case 'Right':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        right();
        break;
      case 'Up':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        up();
        break;
      case 'Down':
        if (languageEnglish && soundTurn) {
          audio.play();
        } else if (soundTurn) {
          audioRus.play();
        }
        down();
        break;
      default:
        if (languageEnglish) {
          if (soundTurn) {
            audioSimple.play();
          }
          const span = key.querySelector('.main-key');
          textarea.setRangeText(span.innerText, textarea.selectionStart, textarea.selectionEnd, 'end');
          textarea.focus();
        } else {
          if (soundTurn) {
            audioSimpleRus.play();
          }
          const span = key.querySelector('.main-key-rus');
          textarea.setRangeText(span.innerText, textarea.selectionStart, textarea.selectionEnd, 'end');
          textarea.focus();
        }

        if (shiftActive) {
          shift();
          shiftActive = false;
          keys[42].classList.toggle('active');
          keys[54].classList.toggle('active');
        }
        break;
    }
  });
});

const changeLanguage = () => {
  const sideKeys = document.querySelectorAll('.side-key');
  const mainKeys = document.querySelectorAll('.main-key');
  const sideKeysRus = document.querySelectorAll('.side-key-rus');
  const mainKeysRus = document.querySelectorAll('.main-key-rus');

  const language = document.querySelector('.language');
  const languageSide = document.querySelector('.language-side');
  const temp = language.innerText;
  language.innerText = languageSide.innerText;
  languageSide.innerText = temp;

  for (let i = 0; i < sideKeys.length; i += 1) {
    sideKeys[i].classList.toggle('disabled');
    mainKeys[i].classList.toggle('disabled');
    sideKeysRus[i].classList.toggle('disabled');
    mainKeysRus[i].classList.toggle('disabled');
  }
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

const shift = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    if (key.querySelector('.side-key')) {
      const sideKey = key.querySelector('.side-key');
      const mainKey = key.querySelector('.main-key');
      const sideKeyRus = key.querySelector('.side-key-rus');
      const mainKeyRus = key.querySelector('.main-key-rus');

      const temp = mainKey.innerHTML;
      const tempRus = mainKeyRus.innerHTML;

      mainKey.innerHTML = sideKey.innerHTML;
      sideKey.innerHTML = temp;

      mainKeyRus.innerHTML = sideKeyRus.innerHTML;
      sideKeyRus.innerHTML = tempRus;
    }
  });
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

// add real keyboard

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

// turn on keyboard

const keyboard = document.querySelector('.keyboard');

document.querySelector('input[type=checkbox]').addEventListener('change', (event) => {
  if (event.target.checked) {
    keyboard.classList.remove('keyboard-off');
  } else {
    keyboard.classList.add('keyboard-off');
  }
});

// add modal window

const modalWindowButton = document.querySelector('div.info > img');
const modalWindow = document.querySelector('.info-modal');
const modalWindowBackground = document.querySelector('.modal-background');
const closeModalButton = document.querySelector('.close>img');

modalWindowButton.addEventListener('click', () => {
  modalWindow.classList.remove('disabled-modal');
  modalWindowBackground.classList.remove('disabled-modal');
});

closeModalButton.addEventListener('click', () => {
  modalWindow.classList.add('disabled-modal');
  modalWindowBackground.classList.add('disabled-modal');
});

modalWindowBackground.addEventListener('click', () => {
  modalWindow.classList.add('disabled-modal');
  modalWindowBackground.classList.add('disabled-modal');
});
