
const inputElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');

textElem.style.fontSize = `${inputElem.value}px`;

inputElem.addEventListener('input', onInputChange);

function onInputChange(event) {
    textElem.style.fontSize = `${event.currentTarget.value}px`;
}