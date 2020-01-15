function operate(num1, num2, operation) {

    let result;

    if (operation == "add") {
        result = (num1 + num2);
    }
    else if (operation == "subtract") {
        result = (num1 - num2);
    }
    else if (operation == "multiply") {
        result = (num1 * num2);
    }
    else if (operation == "divide") {
        if (num2 == 0 ){
            return alert("Can't divide by 0!")
        }
        result = (num1 / num2);
    }
    return result; 
}


function clearDisplay() {

    displayValue.textContent = null;
    operation = "";
    calculations = [];
}


const displayValue = document.querySelector('#displayValue');

// Store array of operations and numbers
let calculations = []; 

//  Click event for each number
const nums = document.querySelectorAll('.number');
nums.forEach(num => num.addEventListener('click', (e) => {
    displayValue.textContent += e.target.value;
}));

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDisplay);

const backSpace = document.querySelector("#backspace");
backSpace.addEventListener('click', () => {
    displayValue.textContent = displayValue.textContent.slice(0, -1);
});

//  Click event for each operation
const operations = document.querySelectorAll('.operation');
operations.forEach(operation => operation.addEventListener('click', () => {
    calculations.push(Number(displayValue.textContent), operation.id);
    displayValue.textContent = '';
}));

//  Perform math operations
const equals = document.querySelector('.equal');
equals.addEventListener('click', (e) => {

    calculations.push(Number(displayValue.textContent))

    let total;
    let a = calculations[0];

    // iterate over operations and numbers
    for (let i = 0; i < calculations.length - 1; i = i + 2) {
        total = operate(a, calculations[i+2], calculations[i+1]);
        a = total;
    }
    
    displayValue.textContent = total;
    calculations = [];
});