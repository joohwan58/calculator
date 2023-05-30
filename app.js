const calculatorScreen = {
    upper: document.querySelector('.upper-screen'),
    lower: document.querySelector('.lower-screen'),

    clearUpperScreen: () => {
        calculatorScreen.upper.textContent = "";
    },
    clearLowerScreen: () => {
        calculatorScreen.lower.textContent = "";
    },
    appendUpperScreen: (append) => {
        let originalContent = calculatorScreen.upper.textContent;
        calculatorScreen.upper.textContent = originalContent + append;
    },
    appendLowerScreen: (append) => {
        let originalContent = calculatorScreen.lower.textContent;
        calculatorScreen.lower.textContent = originalContent + append;
    },
    updateUpperScreen: (update) => {
        calculatorScreen.upper.clearUpperScreen();
        calculatorScreen.upper.textContent = update;
    },
    updatelowerScreen: (update) => {
        calculatorScreen.lower.clearLowerScreen();
        calculatorScreen.lower.textContent = update;
    }
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
                    return 'LMAO';
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
}
