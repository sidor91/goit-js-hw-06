function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// -------------------- divBoxes ----------------
const boxWithBoxes = document.querySelector('#boxes');

// -------------------- Input --------------------

const inputField = document.querySelector('input');
let numberOfBoxes;

inputField.addEventListener('input', onInputAction);

function onInputAction(event) {
   numberOfBoxes = Number(event.currentTarget.value);
}

// -------------------- Create --------------------
const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', onCreateButtonClick);

function onCreateButtonClick(event) {
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
    return;
  }
  alert('the value should be from 1 to 100!');
  onDestroyButtonClick();
}

 let boxesArr = [];

function createBoxes(numberOfBoxes) {
  for (let i = 1; i <= numberOfBoxes; i += 1) {
    const boxElem = document.createElement('div');
    boxElem.style.backgroundColor = `${getRandomHexColor()}`;
    const boxSizeValue = (i * 10 + 20);
    boxElem.style.width = `${boxSizeValue}px`;
    boxElem.style.height = `${boxSizeValue}px`;
    boxesArr.push(boxElem);
  }
    boxWithBoxes.append(...boxesArr);
}

// -------------------- Destroy --------------------
const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', onDestroyButtonClick);

function onDestroyButtonClick() {
  boxWithBoxes.innerHTML = '';
  inputField.value = 0;
  boxesArr = [];
};

