// // Основные переменные для состояния калькулятора
// let numOne = '';
// let numTwo = '';
// let operator = null;
// let shouldResetDisplay = false;

// // Получаем элементы HTML
// const display = document.getElementById('display');
// const numberButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalsButton = document.querySelector('.equals');
// const clearButton = document.querySelector('.clear');
// const backspaceButton = document.querySelector('.backspace');
// const decimalButton = document.querySelector('.decimal');

// // Математические функции
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => (b === 0) ? 'Ошибка!' : a / b;

// // Функция operate, которая вызывает нужную математическую функцию
// const operate = (op, a, b) => {
//   a = Number(a);
//   b = Number(b);
//   switch (op) {
//     case '+':
//       return add(a, b);
//     case '-':
//       return subtract(a, b);
//     case '*':
//       return multiply(a, b);
//     case '/':
//       return divide(a, b);
//     default:
//       return null;
//   }
// };

// // Добавляем прослушиватели событий для кнопок
// numberButtons.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));
// operatorButtons.forEach(button => button.addEventListener('click', () => setOperator(button.textContent)));
// equalsButton.addEventListener('click', evaluate);
// clearButton.addEventListener('click', clear);
// backspaceButton.addEventListener('click', backspace);
// decimalButton.addEventListener('click', appendDecimal);

// // Функция для добавления цифр на дисплей
// function appendNumber(number) {
//   if (display.textContent === '0' || shouldResetDisplay) {
//     resetDisplay();
//   }
//   // Ограничение на количество цифр, чтобы избежать переполнения
//   if (display.textContent.length < 15) {
//     display.textContent += number;
//   }
// }

// // Функция для установки оператора
// function setOperator(op) {
//   if (shouldResetDisplay) {
//     // Если предыдущее вычисление было завершено, используем результат как numOne
//     numOne = display.textContent;
//   }
//   // Если numOne уже есть, значит это не первая операция. Вычисляем предыдущую.
//   if (numOne !== '' && operator !== null) {
//     evaluate();
//   }
//   operator = op;
//   numOne = display.textContent;
//   shouldResetDisplay = true;
// }

// // Функция для вычисления результата
// function evaluate() {
//   if (operator === null || shouldResetDisplay) return; // Не делаем ничего, если нет оператора или уже посчитано
//   numTwo = display.textContent;
//   if (operator === '/' && numTwo === '0') {
//     alert("Нельзя делить на ноль!");
//     clear();
//     return;
//   }
//   let result = operate(operator, numOne, numTwo);
//   // Округляем длинные десятичные числа
//   result = Math.round(result * 10000) / 10000;
//   display.textContent = result;
//   operator = null; // Сбрасываем оператор после вычисления
// }

// // Функция для очистки всего
// function clear() {
//   display.textContent = '0';
//   numOne = '';
//   numTwo = '';
//   operator = null;
//   shouldResetDisplay = false;
// }

// // Функция для удаления последнего символа
// function backspace() {
//   if (display.textContent.length > 1) {
//     display.textContent = display.textContent.slice(0, -1);
//   } else {
//     display.textContent = '0';
//   }
// }

// // Функция для добавления десятичной точки
// function appendDecimal() {
//   if (shouldResetDisplay) {
//     resetDisplay();
//   }
//   if (!display.textContent.includes('.')) {
//     display.textContent += '.';
//   }
// }

// // Функция сброса дисплея
// function resetDisplay() {
//   display.textContent = '';
//   shouldResetDisplay = false;
// }