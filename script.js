const calculatorContainer = document.querySelector('.calculatorContainer');
const calculatorField = document.querySelector('.calculatorField');
let numberValue = 0;

// Initialize calculator display
calculatorField.textContent = '0';

// Calculator values
const calculatorValues = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operators: ['+', '-', '*', '/', '=']
}

for (i = 0; i < calculatorValues.numbers.length; i++) {
    if(numberValue === 0) {
        numberValue = 1;
    } else if (numberValue === 10) {
        numberValue = 0;
    } 
    const numberButton = document.createElement('button');
    numberButton.classList.add('numberButton');
    numberButton.classList.add(numberValue);
    numberButton.textContent = calculatorValues.numbers[i];
    calculatorContainer.appendChild(numberButton);
    numberValue++;
}

for (i = 0; i < calculatorValues.operators.length; i++) {
    const operatorButton = document.createElement('button');
    operatorButton.classList.add('operatorButton');
    if(calculatorValues.operators[i] === '+') {
        operatorButton.classList.add('plus');
    } else if(calculatorValues.operators[i] === '-') {
        operatorButton.classList.add('minus');
    } else if(calculatorValues.operators[i] === '*') {
        operatorButton.classList.add('multiply');
    } else if(calculatorValues.operators[i] === '/') {
        operatorButton.classList.add('divide');
    } else if(calculatorValues.operators[i] === '=') {
        operatorButton.classList.add('equals');
    }
    operatorButton.textContent = calculatorValues.operators[i];
    calculatorContainer.appendChild(operatorButton);
}

function calculate() {
    // Perform calculation based on user input
    
}
