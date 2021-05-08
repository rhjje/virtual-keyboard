import MainKey from './mainKey';
import SideKey from './sideKey';

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
        const key = new MainKey(mainKeys[i][j], sideKeys[i][j],
          mainKeysRus[i][j], sideKeysRus[i][j]);
        row.innerHTML += key.render();
      } else if (sideKeys[i][j] === 'Win') {
        const key = `
          <div class="key win">
            <span>Win</span>
            <span class="language-side">Ru</span>
            <span class="language">En</span>
          </div>`;
        row.innerHTML += key;
      } else {
        const key = new SideKey(sideKeys[i][j]);
        row.innerHTML += key.render();
      }
    }
    keyboard.appendChild(row);
  }

  document.querySelector('.main').appendChild(keyboard);
};

createKeyboard();
