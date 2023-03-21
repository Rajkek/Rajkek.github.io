const numbers = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.bdoppr');
const equals = document.querySelector('.brow');
const inputField = document.getElementById('result');
const clearButton = document.getElementById('clear-button');

let firstNum = '';
let secondNum = '';
let currentOperator = '';
let result = '';
let shouldReset = false;

 function clear() {
  inputField.value = '';
  firstNum = '';
  secondNum = '';
  currentOperator = '';
  result = '';
}

clearButton.addEventListener('click', () => {
    inputField.value = '';
  });


 function calculate() {
  if (currentOperator === '+') {
    result = parseFloat(firstNum) + parseFloat(secondNum);
  } else if (currentOperator === '-') {
    result = parseFloat(firstNum) - parseFloat(secondNum);
  } else if (currentOperator === '*') {
    result = parseFloat(firstNum) * parseFloat(secondNum);
  } else if (currentOperator === '/') {
    result = parseFloat(firstNum) / parseFloat(secondNum);
  }
  inputField.value = result;
  firstNum = result.toString();
  secondNum = '';
}


 numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (shouldReset) {
      clear();
      shouldReset = false;
    }
    inputField.value += number.children[0].textContent;
  });
});


 operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    if (shouldReset) {
      shouldReset = false;
    }1
    if (firstNum === '') {
      firstNum = inputField.value;
    } else if (secondNum === '') {
      secondNum = inputField.value;
      calculate();
    } 
    currentOperator = operator.children[0].textContent;
    inputField.value = '';
  });
});

 equals.addEventListener('click', () => {
  if (firstNum === '' || currentOperator === '') {
    return;
  }
  if (secondNum === '') {
    secondNum = inputField.value;
  }
  calculate();
  shouldReset = true;
});
 clear();

