const calculatorContainer = document.querySelector('.calculatorContainer');
const calculatorField = document.querySelector('.calculatorField');
let expression = '';

// Initialize calculator display
calculatorField.textContent = '0';

// Calculator values
const calculatorValues = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operators: ['+', '-', '*', '/', '=']
}

// Create number buttons
for (let i = 0; i < calculatorValues.numbers.length; i++) {
    const numberButton = document.createElement('button');
    numberButton.classList.add('numberButton');
    numberButton.textContent = calculatorValues.numbers[i];
    calculatorContainer.appendChild(numberButton);
}

// Create operator buttons
for (let i = 0; i < calculatorValues.operators.length; i++) {
    const operatorButton = document.createElement('button');
    operatorButton.classList.add('operatorButton');
    operatorButton.textContent = calculatorValues.operators[i];
    calculatorContainer.appendChild(operatorButton);
}

// Add All Clear (AC) button
const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'AC';
calculatorContainer.appendChild(clearButton);

// Add click event listeners to each button
for (let i = 0; i < calculatorContainer.children.length; i++) {
    calculatorContainer.children[i].addEventListener('click', function(event) {
        const buttonValue = event.target.textContent;
        if (buttonValue === 'AC') {
            expression = '';
            updateUI();
        } else if (buttonValue === '=') {
            calculate();
        } else {
            expression += buttonValue;
            updateUI();
        }
    });
}

function updateUI() {
    calculatorField.textContent = expression || '0';
}

function calculate() {
    try {
        // Only allow numbers and operators
        if (/^[0-9+\-*/.]+$/.test(expression)) {
            const result = Function('"use strict";return (' + expression + ')')();
            calculatorField.textContent = result;
            expression = result.toString();
        } else {
            calculatorField.textContent = 'Error';
            expression = '';
        }
    } catch {
        calculatorField.textContent = 'Error';
        expression = '';
    }
}