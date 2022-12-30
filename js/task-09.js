const colorChangeButton = document.querySelector('.change-color');
const bodySection = document.querySelector('body');
const colorIdentificator = document.querySelector('.color');

colorChangeButton.addEventListener('click', changeBodyColor);

function changeBodyColor(event) {
  bodySection.style.backgroundColor = getRandomHexColor();
  colorIdentificator.textContent = `${bodySection.style.backgroundColor}`;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
