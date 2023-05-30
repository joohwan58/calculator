let calculatorScreen = {
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
        calculatorScreen.upper.clearUpperScreen
        calculatorScreen.upper.textContent = update;
    },
    updatelowerScreen: (update) => {
        calculatorScreen.lower.clearLowerScreen
        calculatorScreen.lower.textContent = update;
    }
}
