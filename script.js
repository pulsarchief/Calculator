// const zero = document.querySelector("#zero");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");

// const add = document.querySelector("#add");
// const subtract = document.querySelector("#subtract");
// const multiply = document.querySelector("#multiply");
// const divide = document.querySelector("#divide");

const main_display = document.querySelector("#main_display");
const mini_display = document.querySelector("#mini_display");

const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");

let num1 = "";
let op = "";
let num2 = "";
let display = "";

let num1Input = true;
let opInput = false;
let num2Input = false;
let displayExist = false;

main_display.textContent = "";
mini_display.textContent = "";

const numList = document.querySelectorAll(".number");
const operatorList = document.querySelectorAll(".operator");

// execution starts

disableOperatorEqual();

for (const number of numList) {
    number.addEventListener("click", () => {
        if (displayExist && opInput) {
            num1 = display;
            num2 += number.textContent;
            num1Input = true;
            num2Input = true;
            main_display.textContent += number.textContent;
        } else if (num1Input && !num2Input && !displayExist && !opInput) {
            num1 += number.textContent;
            num1Input = true;
            main_display.textContent += number.textContent;
            enableOperatorEqual();
        } else if (num1Input && opInput) {
            num2 += number.textContent;
            main_display.textContent += number.textContent;
            num2Input = true;
        }
    });
}

for (const operator of operatorList) {
    operator.addEventListener("click", () => {
        if (num1Input && opInput && num2Input) {
            operation();
            displayExist = true;
            mini_display.textContent = display;
            op = operator.textContent;
            main_display.textContent += op;
            num1 = display;
            num2Input = false;
            num2 = "";
        } else if (num1Input && !opInput) {
            op = operator.textContent;
            main_display.textContent += op;
            opInput = true;
        }
    });
}

equalsBtn.addEventListener("click", () => {
    operation();
    mini_display.textContent = display;
    main_display.textContent = "";
    num2 = false;
    opInput = false;
    displayExist = true;
});

clearBtn.addEventListener("click", () => {
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

function disableNumbers() {
    for (const numbers of numList) {
        numbers.setAttribute("disabled", "disabled");
    }
}
function enableNumbers() {
    for (const numbers of numList) {
        numbers.removeAttribute("disabled");
    }
}

function clear() {
    num1 = "";
    num2 = "";
    display = "";
    op = "";
    num1Input = true;
    opInput = false;
    num2Input = false;
    displayExist = false;
    mini_display.textContent = "";
    main_display.textContent = "";
    disableOperatorEqual();
}

function operation() {
    switch (op) {
        case "+":
            display = addition();
            break;
        case "-":
            display = subtraction();
            break;
        case "*":
            display = multiplication();
            break;
        case "/":
            display = division();
            break;
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
