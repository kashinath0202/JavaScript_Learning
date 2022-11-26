console.log("==================create variables==================");

var myFullName;
myFullName="kashi Jeure";
console.log(myFullName);

var myFullName ="kashi Jeure";
console.log(myFullName);

var myMoNumber;
myMoNumber=9096949202;
console.log(myMoNumber);

var myMoNumber=9096949202;
console.log("My Mobile Number",myMoNumber);

console.log("==================Swapping value==================");

var swap1="good";
var swap2="bad";
    console.log(swap1,swap2);
var temp;
temp=swap1;
swap1=swap2;
swap2=temp;
    console.log(swap1,swap2);

var text1="hiiii";
var value= 2;
var text2="by";
     console.log(text1,value,text2);
var temp;
temp=text1;
text1=value;
value=text2;
text2=temp;
     console.log(text1,value,text2);

     console.log("==================Creating Function (no argument)==================");

function sample(){
    console.log("No Argument Value"); 
}
sample();

console.log("==================Creating Function (With argument)==================");
 
function word(arg1,arg2) {
   console.log(arg1,arg2);
}
word("sachin","sandip");

console.log("==================Creating Function (concat)==================");

function value1(arg1,arg2){
  var value1=(arg1,arg2);
  return(arg1+arg2);
}
var total= value1(10,20);
    console.log(total);

  console.log("==================Creating Function (swap)==================");    

function swap(arg1,arg2) {
    console.log(arg1,arg2);
    var temp;
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);
}    
swap(55,22);
swap(11,33);

console.log("==================Creating Function (Return Value)==================");  

function text(arg1,arg2,arg3) {
 console.log(arg1,arg2,arg3);  
  return("i am kashinath");
}
 var result1=text("kashi","good","boy");
   console.log(result1);

   console.log("==================Creating Function (typeof number string boolean)==================");  

var word=10;
var text="kashi";
var isMarried=true

console.log(typeof(word));
console.log(typeof(text));
console.log(typeof(isMarried));