// dont use eval or new functiom

function add (a, b) {
    // return a + b
    display.textContent = (+a + +b);
}

function subtract (a, b) {
    // return a - b
    display.textContent = (a - b);
}

function multiply (a, b) {
    // return a * b
    display.textContent = (a * b);
}

function divide (a, b) {
    // return a / b
    if (b === "0" || b === "00") {
        display.textContent = "Dividing by zero? Error 404: Logic not found."
    } else {
        display.textContent = (a / b);
    }
    
}

let firstNumber;
let operator;
let secondNumber;

function operate (num1, op, num2) {
    if (op === "+") {
        add(num1, num2);
    } else if (op === "-") {
        subtract(num1, num2);
    } else if (op === "*") {
        multiply(num1, num2);
    } else if (op === "/") {
        divide(num1, num2);
    }
}

const display = document.querySelector("label");
const buttons = document.querySelectorAll("button");
let displayValue = display.textContent;

let operatorPressed = false;


buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.className === "ac") {
            firstNumber = null
            operator = null
            secondNumber = null
            displayValue = "0";
            display.textContent = "0";
            decPressed = false;
        } else if (e.target.className === "operator") {
            if (!operator) {
                firstNumber = display.textContent; // Store the current display value as the first number only if an operator hasn't been set yet
            } else {
                 // If an operator has already been set, perform the operation using the existing firstNumber, operator, and the displayed value
                secondNumber = display.textContent;
                operate(firstNumber, operator, secondNumber);
                firstNumber = display.textContent // set result as new first number
            }
            operator = e.target.textContent;
            operatorPressed = true
        } else if (e.target.className === "equals") {
            secondNumber = display.textContent;
            operate(firstNumber, operator, secondNumber);
        } else if (e.target.className === "number") {
            if (display.textContent === "0" || display.textContent === "00" || operatorPressed) {
                display.textContent = "";
                operatorPressed = false;
            }
            display.textContent += (e.target.textContent);
        } else if (e.target.className === ".") { // adding decimal function
            if (display.textContent.includes(".")) {
                document.getElementsByClassName(".").disabled = true;
            } else {
                display.textContent += (e.target.textContent);
            }
        } else if (e.target.className === "+/-") { //+/- button function 
            if (operatorPressed) {
                display.textContent = "";
                operatorPressed = false; // have to add so pressing number doesnt clear screen again 
            } 
            if (display.textContent.includes("-")) {
                display.textContent = display.textContent.replace("-", "");
            } else {
                display.textContent = "-" + display.textContent;
            }
            if (display.textContent === "-0" || display.textContent === "-00") {
                display.textContent = "-";
                operatorPressed = false;
            }
            
        } else if (e.target.className === "%") {
            display.textContent = display.textContent * .01
        }
    });
});



