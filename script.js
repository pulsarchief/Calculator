const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const display = document.querySelector("#display");

const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");

let num1 = "";
let op = "";
let num2 = "";

const numList = document.querySelectorAll(".number");
const operatorList = document.querySelectorAll(".operator");

let turn = 0;
disableOperatorEqual();

for (const num of numList) {
    num.addEventListener("click", () => {
        
    });
}
for (const operator of operatorList) {
    operator.addEventListener("click", () => {
    });
}

equalsBtn.addEventListener("click", () => {
});

clearBtn.addEventListener("click", () => {
    disableOperatorEqual();
    clear();
});

function disableOperatorEqual() {
    for (const operator of operatorList) {
        operator.setAttribute("disabled", "disabled");
    }
    equals.setAttribute("disabled", "disabled");
}

function enableOperatorEqual() {
    for (const operator of operatorList) {
        operator.removeAttribute("disabled");
    }
    equals.removeAttribute("disabled");
}

function clear() {
    display.textContent = "";
    num1 = "";
    op = "";
    num2 = "";
}

function operation() {
    switch (op) {
        case "+":
            return addition();
        case "-":
            return subtraction();
        case "*":
            return multiplication();
        case "/":
            return division();
    }
}

function addition() {
    return +num1 + +num2;
}
function subtraction() {
    return num1 - num2;
}
function division() {
    return Math.floor(num1 / num2);
}
function multiplication() {
    return num1 * num2;
}
