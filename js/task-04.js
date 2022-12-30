const counterElement = document.querySelector('#value');
let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', onIncrementBtn);
decrementBtn.addEventListener('click', onDecrementBtn);

function onIncrementBtn() {
    counterValue += 1;
    counterElement.textContent = `${counterValue}`;
}

function onDecrementBtn() {
    counterValue -= 1;
    counterElement.textContent = `${counterValue}`;
}