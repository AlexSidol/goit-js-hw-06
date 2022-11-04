
const inputRef = document.querySelector('#name-input');
console.log(inputRef.value);

const textOutputRef = document.querySelector('#name-output');
// console.log(textOutputRef);

inputRef.addEventListener('input',() => {

    textOutputRef.textContent = inputRef.value;
    if (!inputRef.value) {
        textOutputRef.textContent = 'Anonymous';
     }
})

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".