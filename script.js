const calculatorContainer = document.querySelector('.calculatorContainer');
const calculatorField = document.querySelector('.calculatorField');
let numberValue = 0;
let userNumbers = [];
let userOperands = [];

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

    /**
     * When user pushes a button it displays the number pushed on the calculatorField to the right
     * of any previous numbers pushed and it stores the number in a userNumbers array. (Each complete
     * number is a new array inside a multi-dimensional array)
     */

    /** When user pushes an operator it stores the operator in a userOperands array and erases the
     * number from the calculatorField to allow for the user to input more numbers.
     */

    /** When user pushes equals it pulls the values out of the arrays and performs the calculations
     * then writes the result back to the calculatorField
     */
    
}
