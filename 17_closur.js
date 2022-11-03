var global_variable = 300;
function outer() {
    let outer_fun_variable = 100;
    let inner_fun = function () {
        let inner_fun_variable = 200;
        console.log(inner_fun_variable, outer_fun_variable, global_variable);
    }
    return inner_fun;
}
let returnValue = outer();
returnValue();


console.warn("================= Practice closure ======================");

var global_variable_value = "Sachin";
function outFunction() {
    let outFunction = "sandip";
    var innFunction = function () {
        var innFunctionValue = 222;
        console.log(innFunctionValue, outFunction, global_variable_value);
    }
    return innFunction;
}
var result = outFunction();
result();                    //  practice as



console.warn("================= Practice closure ======================");

var glo_variable = 9999;
function sachin() {
    let outValues = 2000;
    var sanndip = function () {
        let innerValues = 500;
        console.log(innerValues, outValues, glo_variable);
    }
    return sanndip;
}
let finalResult = sachin();
finalResult();