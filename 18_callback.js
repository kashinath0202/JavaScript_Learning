console.log("================= callback =====================");
function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

do_assignment(copy_assignment);


console.log("================= callback (Practice) =====================");

function firstName(lastNameArgument){
      console.log("Rohit");
      lastNameArgument();
}

function lastName(){
    console.log("Sharma");
}
  firstName(lastName);

  console.log("================= callback (Practice) =====================");

function firstFunction(Callbacks1,Callbacks2){
    console.log("How are You ??");
    Callbacks1();
    Callbacks2();
}

function secondFunction(){
    console.log("I am so fine...");
}

function thirdFunction(){
    console.log("thank you..." );
}
   firstFunction(secondFunction,thirdFunction)




console.log("================= timeinterval =====================");


function display() {
    console.log("display function");
}

setTimeout( display, 4000);    // timeout function

//setInterval(display, 2000);    // setInterval


function display() {
    console.log("display function");
}

//setInterval( display, 2000);

console.log("================= time interval (Practice) =====================");

function interval_function(){
    console.log("I come to repeat 2sec");
}
   
    //setInterval(interval_function,2000);
    setTimeout(interval_function,5000)


   console.log("================= first class citizens =====================");



// Functions are known as first class citizens in JavaScript
// It is because of three reasons
//1.  Function can be stored in a variable ---> Function Expression
//2.  Function can be passed as an argument to another function ---> Callbacks
//3 . A function can return another function


// 3 . A function can return another function

function message() {
    console.log("Inside message function ");
    return function(){
        console.log("Inside inner function");
    }
}

message()();

console.log("================= first class citizens (Practice) =====================");


function firstClass(){
    console.log("Hay Good Morning Guys");
    return firstClassFun;
}
   function firstClassFun(){
    console.log("Good Morning");
   }
     
  firstClass()();



console.log("================= higher order function =====================");


function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
    return function() {
        console.log("Yahooo.. mai to ban gaya....");
    }
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

let returnFun = do_assignment(copy_assignment);
returnFun();


console.log("================= higher order function (Practice) =====================");


function firstMyFunction(call){
    console.log("Good Morning");
    call();
    return secondMyFunction;
}

function secondMyFunction(){
    console.log("Good Afternoon");
}

function thirdMyFunction(){
    console.log("Good Evening");
}

firstMyFunction(thirdMyFunction)(); 

console.warn("============== callback==============");


function outerOf(value1){
   console.log("sachin");
   value1();
}

function innerOf(){
  console.log("hiiii");
}
outerOf(innerOf);


console.log("================= first class citizens (Practice) =====================");

function imram(){
    console.log("Hi Sachin");
    return suhas ()
}

function suhas(){
    console.log("Hii Sandip");
}
imram();


console.log("================= higher order function (Practice) =====================");

function sagar(argu){
    console.log("good Morning");
    argu();
    return function anil(){
        console.log("good night");
    }
}

function akashh(){
    console.log("good eve");
}
sagar(akashh)();