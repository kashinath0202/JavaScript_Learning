'use strict'

function display(name, ...myName) {
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true, "Sajid");

console.warn("=================================");

function divide(x, y=1){
    console.log(x/y);
}
divide(10);
