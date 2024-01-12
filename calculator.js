let input = document.getElementById('input')

function updateDisplay(value) {
    input.value += value;
}

function clearDisplay() {
    input.value = '';
}

function deleteLast() {
    input.value = input.value.slice(0, -1);
}

function calculateResult() {
    let result = eval(input.value);
    input.value = (result !== undefined && !isNaN(result)) ? result : 'Error'
}


document.addEventListener('keydown', function (event) {
    let key = event.key;

    if (/[\d+\-*/.=]/.test(key)) {
        updateDisplay(key)
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
})
