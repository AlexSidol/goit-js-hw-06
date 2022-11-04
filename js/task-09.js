function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomHexColorBtn() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const changeColorBtnRef = document.querySelector('.change-color');
const colorValueRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  let randomColorBtn = getRandomHexColorBtn();
  bodyRef.style.backgroundColor = randomColor;
  changeColorBtnRef.style.backgroundColor = randomColorBtn;
  colorValueRef.textContent = randomColor;
} )


console.log(colorValueRef);


// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>


