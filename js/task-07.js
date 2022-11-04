const inputRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');

inputRef.addEventListener('change', event => {
    textRef.style.fontSize = `${event.target.value}px`;
    console.log(event.target.value);
})

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.