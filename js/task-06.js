const inputRef = document.querySelector('#validation-input');
const dataRef = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', event => {
   
    if (event.target.value.length >= dataRef) {
        inputRef.classList.add('valid');
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid');
        }
    
    } else {
        if(inputRef.classList.contains('valid')) {
            inputRef.classList.remove('valid');
        }
        inputRef.classList.add('invalid');
    }
    console.log(event.target.value.length);
 })




console.log(dataRef);



// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }