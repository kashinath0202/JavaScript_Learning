   //First Question

function kashi () {
    console.warn("Question First (i)");
console.log("==============No Arguments And No Return Type ============== ");
}
kashi();

function sachin (){
    console.warn("Question First (ii)");
    console.log("==============No Arguments And No Return Type ==============");
}
sachin();

//Second Question

console.warn("Question No:- 2(Concat)");
 
function introduction(firstName,lastName){
console.log(firstName+lastName);
}
introduction("Kashinath", "Jeure");
introduction("Kashinath"," Jeure");
introduction(250,250);
introduction(22.5,22);

//Question No-03
console.warn("Question No-03 (3.1) (Function Swapping)");

function swap_values(arg1,arg2){
 console.log("=======Before swap Two Value=======");
 console.log(arg1,arg2);
 console.log("=======After swap Two Value=======");
 var temp;
 temp=arg1;
 arg1=arg2;
 arg2=temp;
 console.log(arg1,arg2);
}
swap_values("Virat","Anushka");

//Question No-03 
console.warn("Question No-03 (3.2) (Function Swapping)");

function swap_values(arg1,arg2){
console.log("=======Before swap Two Value=======");
console.log(arg1,arg2);
console.log("=======After swap Two Value=======");
 var temp;
 temp=arg1;
 arg1=arg2;
 arg2=temp;
 console.log(arg1,arg2);
}
swap_values("Kashi1","Kashi2");
swap_values("1000","2000");
swap_values("hiiiii","byyyyy")

//Question No-04
console.warn("Question No-04 (4.2) (Function Additional Return)");

function add_three_numbers(arg1,arg2,arg3){
  console.log(arg1,arg2,arg3);
  return (arg1+arg2+arg3);
}
var values= add_three_numbers(10.23,600,40);
console.log(values);

console.warn("Question No-04 (4.3) (Function Additional Return)");

function add_three_numbers(word1,word2,word3){

 return (word1+word2+word3);
}
var message = add_three_numbers("Hello","Good","Morning");
console.log(message);