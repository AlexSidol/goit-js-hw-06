let counterValue = 0;

const displayCounter=document.querySelector('#value')
const counterEl = document.querySelector('#counter');
const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;

console.log(incrementBtn);


decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    displayCounter.textContent = counterValue;
})

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    displayCounter.textContent = counterValue;
})


// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.