const MAX_LENGTH = 9;

const calculatorScreen = {
    upper: document.querySelector('.upper-screen'),
    lower: document.querySelector('.lower-screen'),

    clearUpperScreen: () => {
        calculatorScreen.upper.textContent = "";
    },
    clearLowerScreen: () => {
        calculatorScreen.lower.textContent = "";
    },
    ValidityChecker: (checking) => {
        let count = 0;
        for (let i = 0; i < checking.length; i++) {
            if (checking[i] == '.') {
                count++;
            }
        }
        if (count == 1) {
            return checking;
        }
        if (count > 1) {
            return calculatorScreen.lower.textContent;
        }
        let floatChanged = (parseFloat(calculatorScreen.lower.textContent) === parseFloat(checking)) ? false : true;
        if (floatChanged) {
            return parseFloat(checking);
        } else {
            return calculatorScreen.lower.textContent;
        }

    },
    appendLowerScreen: (append) => {
        // if (calculatorScreen.lower.textContent == '0') {
        //     calculatorScreen.lower.textContent = append;
        //     return;
        // }
        let newContent = calculatorScreen.lower.textContent + append;
        calculatorScreen.lower.textContent = calculatorScreen.ValidityChecker(newContent);
    },
    backspace: () => {
        let originalContent = calculatorScreen.lower.textContent;
        calculatorScreen.lower.textContent = originalContent.slice(0, -1);
        if (calculatorScreen.lower.textContent == "") {
            calculatorScreen.lower.textContent = '0';
        }
    },
    updateUpperScreen: (update) => {
        calculatorScreen.upper.textContent = update;
    },
    updatelowerScreen: (update) => {
        calculatorScreen.lower.textContent = update;
    },
    clear: () => {
        calculatorScreen.updateUpperScreen("");
        calculatorScreen.updatelowerScreen("0");
    },
}

let evaluation = {
    firstNumber: "",
    operator: "",
    secondNumber: "",

    evaluate: () => {
        let a = parseFloat(evaluation.firstNumber);
        let b = parseFloat(evaluation.secondNumber);
        switch (evaluation.operator) {
            case '÷':
                if (b == 0) {
                    alert('By attempting to divide by zero, you have destroyed the universe. Good for you!');
                    return '0';
                }
                return a / b;
            case '×':
                return a * b;
            case '-':
                return a - b;
            case '+':
                return a + b;
            default:
                return 'ERROR';
                break;
        }
    },

    appendFirstNumber: (n) => {
        evaluation.firstNumber += n;
    },
    appendSecondNumber: (n) => {
        evaluation.secondNumber += n;
    },
    clear: () => {
        evaluation.firstNumber = "";
        evaluation.secondNumber = "";
        evaluation.operator = "";
    },
}

function inputNumber(n) {
    calculatorScreen.appendLowerScreen(n);
    if (evaluation.operator == "") {
        evaluation.firstNumber = calculatorScreen.lower.textContent;
    } else {
        evaluation.secondNumber = calculatorScreen.lower.textContent;
    }
}

function inputOperator(op) {
    if (calculatorScreen.lower.textContent == '0') {
        return;
    }
    evaluation.operator = op;
    calculatorScreen.updateUpperScreen(parseFloat(calculatorScreen.lower.textContent) + op);
    evaluation.firstNumber = calculatorScreen.lower.textContent;
    calculatorScreen.updatelowerScreen("0");
}

function equals() {
    if (evaluation.firstNumber == "" || evaluation.operator == "" || evaluation.secondNumber == "") {
        return;
    }
    let result = evaluation.evaluate();
    calculatorScreen.clear();
    calculatorScreen.updatelowerScreen(result);
    evaluation.clear();
    evaluation.firstNumber = result;
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    calculatorScreen.clear();
    evaluation.clear();
});

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', calculatorScreen.backspace);

const equalButton = document.querySelector('.equals');
equalButton.addEventListener('click', equals);

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((element) => {
    element.addEventListener('click', () => {
        inputNumber(element.classList[2]);
    })
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    inputNumber('.');
})

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((element) => {
    element.addEventListener('click', () => {
        inputOperator(element.classList[2]);
    });
});