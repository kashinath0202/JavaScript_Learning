console.warn("=============================== Q.1 ===============================");

function simple(value) {

    if (value%2==0) {
        console.log("EVEN");
    }else{
        console.log("The 45 value is:","ODD");
    }
}
simple(45);



function simple_1(value_1) {

    if (value_1%2==0) {
        console.log("The 70 value is:","EVEN");
    }else{
        console.log("The 70 value is:","ODD");
    }
}
simple_1(70);


function result(value_2) {
    if(value_2%2==0){
        console.log("The 67 value is:","EVEN");
    }else{
        console.log("The 67 value is:","ODD");
    }
}
result(67);

function result_1(value_3) {
    if(value_3%2==0){
        console.log("The 98 value is:","EVEN");
    }else{
        console.log("The 98 value is:","ODD");
    }
}
result_1(98);


console.warn("=============================== Q.2 ===============================");

console.warn("=============================== age=18 ===============================");

function voting(age) {
   if (age>=18) {
    console.log("This Person eligible for voting");
   } else{
    console.log("This Person Not eligible for voting");
   }
}
voting(18);

console.warn("=============================== age=20 ===============================");

function voting(age) {
    if (age>=18) {
     console.log("This Person eligible for voting");
    } else{
     console.log("This Person Not eligible for voting");
    }
 }
 voting(20);

 console.warn("=============================== age=17 ===============================");

function voting(age) {
    if (age>=18) {
     console.log("This Person eligible for voting");
    } else{
     console.log("This Person Not eligible for voting");
    }
 }
 voting(17);

 console.warn("=============================== age=17 ===============================");

function voting(age) {
    if (age>=18) {
     console.log("This Person eligible for voting");
    } else{
     console.log("This Person Not eligible for voting");
    }
 }
 voting(40);

 console.warn("=============================== Q.3 ===============================");

 function string(value){
    var value1=value.length
     if (value1>=10) {
        console.log("JavaScript-ES6 this string more than 10 character");
     }else{
        console.log("JavaScript-ES6 this string Not more than 10 character");
     }
 }
 string("JavaScript-ES6")

 console.warn("=============================== Q.4 ===============================");

 function string_1(word) {
     if( word.startsWith("Java")){
        console.log("Yes This String Starts With Java");
     }else{
        console.log("No This String Not Starts With Java");
    }
 }
 string_1("JavaScript Language")