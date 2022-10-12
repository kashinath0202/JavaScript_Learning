console.warn("============================ Q.No.01 ============================");

var turnery=function(value1,value2){
     var value = value1>value2 ? value1 : value2;
     console.log(`the Greatest value of 10 & -10 : ${value}`);
}
var result=turnery(10,-10);


var turnery1 =function(value1,value1){
  var result=800>899 ?value1:value1;
  console.log(`the Greatest value of 800 & 899 : ${result}`);
}
var rusult1=turnery1(800,899);

console.warn("============================ Q.No.02 ============================");

var value=function(num1,){
   var ans=num1%2==0?true:false;
   console.log(`The 29 Number is Odd ${ans}`);
}
var result=value(29);

var value=function(arg1){
  var result=arg1%2==0?true:false;
  console.log(`The 44 Number is Even: ${result}`);
}
value(44);

var value=function(arg1){
    var result=arg1%2==0?true:false;
    console.log(`The 0 Number is Even: ${result}`);
  }
  value(0);

  var value=function(arg1){
    var result=arg1%2==0?true:false;
    console.log(`The 101 Number is Odd: ${result}`);
  }
  value(101);

  console.warn("============================ Q.No.03 ============================");

var word=function(arg1){
    console.log(`The Word : ${arg1}`);
    var value1=arg1.length;
    console.log( `The word Length : ${value1}`);
    var result_1=value1%2==0?"EVEN":"ODD";
    console.log(`${result_1}`);
    return result_1;
}
var result=word("JavaScript");

                    console.warn("============================ ");

var value1=function(arg2){
    console.log(`The Word : ${arg2}`);
  var result_1=arg2.length;
  console.log(`The word Length :${result_1}`);
  var result_2=result_1%2==0 ?"EVEN":"ODD"
  return result_1;
}
var result=word("developer");

console.warn("============================ ");

var value1=function(arg2){
    console.log(`The Word: ${arg2}`);
    var result_1=arg2.length;
    console.log(`The word Length :${result_1}`);
    var result_2=result_1%2==0 ?"EVEN":"ODD"
    return result_1;
  }
  var result=word("Google");
  console.warn("============================ ");