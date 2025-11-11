let display = document.querySelector("#input-area");
let equalBtn = document.querySelector("#equal");
let btn = document.querySelector(".btn");

let displayValue = display.value;
let parts = displayValue.split("\+\-\*\/");
let currentValue = parts[parts.length - 1];

equalBtn.addEventListener('click', () => {
    if (display.value === '') {
        display.value = '';
    } else {
        let result = eval(display.value);
        display.value = result;
    }
})