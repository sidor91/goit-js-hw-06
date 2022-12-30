
const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');


inputElem.addEventListener('input', onNameInput);


function onNameInput (event) {
    event.currentTarget.value === ''? outputElem.textContent = 'Anonymous' : outputElem.textContent = event.currentTarget.value;
}

