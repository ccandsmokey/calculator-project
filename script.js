// dont use eval or new functiom

function add (a, b) {
    // return a + b
    console.log(+a + +b)
}

function subtract (a, b) {
    // return a - b
    console.log(a - b)
}

function multiply (a, b) {
    // return a * b
    console.log(a * b)
}

function divide (a, b) {
    // return a / b
    console.log(a / b)
}

let firstNUmber
let operator
let secondNumber

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

const display = document.querySelector("label")
const buttons = document.querySelectorAll("button")
let displayValue = display.textContent



buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.className === "number") {
            display.textContent += (e.target.textContent)
            displayValue = display.textContent
        }
        if (e.target.className === "operator") {
            firstNUmber = displayValue
            operator = e.target.textContent
            display.textContent = ""
        }
        if (e.target.className === "equals") {
            secondNumber = displayValue
            operate(firstNUmber, operator, secondNumber)
        }
    })
})

