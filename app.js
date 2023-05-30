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
        let floatValidity = (parseFloat(calculatorScreen.lower.textContent) === parseFloat(checking)) ? false : true;
        switch (count) {
            case 0:
                return floatValidity;
            case 1: 
                return true;
            default:
                return false;
                break;
        }
    },
    appendLowerScreen: (append) => {
        if (calculatorScreen.lower.textContent == '0') {
            calculatorScreen.lower.textContent = append;
            return;
        }
        let newContent = calculatorScreen.lower.textContent + append;
        if (calculatorScreen.ValidityChecker(newContent)) {
            calculatorScreen.lower.textContent = newContent;
        }
    },
    backspace: () => {
        let originalContent = calculatorScreen.lower.textContent;
        calculatorScreen.lower.textContent = originalContent.slice(0, -1);
    },
    updateUpperScreen: (update) => {
        calculatorScreen.upper.textContent = update;
    },
    updatelowerScreen: (update) => {
        calculatorScreen.lower.textContent = update;
    },
    clear: () => {
        calculatorScreen.updatelowerScreen("");
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
    console.log(evaluation.firstNumber);
    console.log(evaluation.operator);
    console.log(evaluation.secondNumber);
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
