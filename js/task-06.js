const inputElem = document.querySelector('#validation-input');
inputElem.addEventListener('input', lengthRefresh);
inputElem.addEventListener('blur', lengthValidator);

function lengthRefresh(event) {
    inputElem.classList.remove('valid');
    inputElem.classList.remove('invalid')
}

function lengthValidator(event) {
    event.currentTarget.value.length === 6? inputElem.classList.add('valid') : inputElem.classList.add('invalid');
}


