// Создание базовых арифмитических функций 
const add = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);

// Создаем переменный для наших чисел при вводе для сохранения 
let numOne = "";
let numTwo = "";
let op = "";

// Создание функции operate
function operate(op, numOne, numTwo) {
  numOne = Number(numOne); //Преобразуем строку  в число 
  numTwo = Number(numTwo); //Преобразуем строку  в число 

  switch (op) {
    case '+':
      return add(numOne, numTwo);
    case '-':
      return subtract(numOne, numTwo);
    case '*':
      return multiply(numOne, numTwo);
    case '/':
      if (numTwo === 0) {
        return ("Ошибка-(Деление на ноль)")
      }
      return divide(numOne, numTwo)

  }
}

// Получаем доступ к элементам DOM
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const clearOperator = document.querySelectorAll(".clear operator");
const backspaceOperator = document.querySelector(".backspace");
const equalsOperator = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");
const display = document.getElementById('display');

// Функция вывода данных в дисплей 
number.forEach((item) => {
  item.addEventListener('click', () => {
    if (display.textContent === ('0')) {    //условие проверки есть ли 0 
      display.textContent = item.textContent;
    }
    else { display.textContent = display.textContent + item.textContent };
  })
})

// Добавляем слушатель к кнопкам операторов 

operator.forEach((item) => {
  item.addEventListener('click', () => {
    numOne = display.textContent;
    op = item.textContent;
    display.textContent = '0'

  })
})

//Добавляем слушатель к кнопке =
equalsOperator.addEventListener('click', () => {
  numTwo = display.textContent;

  console.log('numOne:', numOne);
  console.log('op:', op);
  console.log('numTwo:', numTwo);
  display.textContent = operate(op, numOne, numTwo);
})

// Функция удаления символов 
backspaceOperator.addEventListener('click', () => {
  // Выводим текст ДО
  console.log('Текст до удаления:', display.textContent);

  display.textContent = display.textContent.slice(0, -1);

  // Выводим текст ПОСЛЕ
  console.log('Текст после удаления:', display.textContent);
});


// Функция очистки дисплея
clearOperator.forEach((item) => {
  item.addEventListener('click', () => {
    display.textContent = '0';
    numOne = "";
    numTwo = "";
    op = "";
  })
})