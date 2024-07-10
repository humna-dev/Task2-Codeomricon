let previousOperandTextElement = document.getElementById('previous-operand');
let currentOperandTextElement = document.getElementById('current-operand');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
    }
    updateDisplay();
}

function deleteNumber() {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            computation = prev + curr;
            break;
        case '-':
            computation = prev - curr;
            break;
        case '*':
            computation = prev * curr;
            break;
        case '/':
            computation = prev / curr;
            break;
        default:
            return;
    }
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    previousOperandTextElement.innerText = previousOperand + ' ' + (operation || '');
    currentOperandTextElement.innerText = currentOperand;
}
