function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// -------------------- divBoxes ----------------
const boxWithBoxes = document.querySelector('#boxes');

// -------------------- Create --------------------
const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', onCreateButtonClick);

function onCreateButtonClick(event) {
  createBoxes(numberOfBoxes);
}

function createBoxes(numberOfBoxes) {
  for (let i = 1; i <= numberOfBoxes; i += 1) {
    const boxElem = document.createElement('div');
    boxElem.style.backgroundColor = `${getRandomHexColor()}`;
    boxElem.style.width = `(10 * ${i} + 30)`;
    boxElem.style.height = `(10 * ${i} + 30)`;
    boxWithBoxes.append(boxElem);
  }
}

// -------------------- Destroy --------------------
const destroyButton = document.querySelector('[data-destroy]');
// destroyButton.addEventListener('click', onDestroyButtonClick);

// -------------------- Input --------------------

const inputField = document.querySelector('input');
let numberOfBoxes;

inputField.addEventListener('input', onInputAction);

function onInputAction(event) {
  numberOfBoxes = Number(event.currentTarget.value);
}

