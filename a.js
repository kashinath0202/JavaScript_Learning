
var word = "kashinath gopal jeure"
var word_length = word.length;

for (let index = 0; index < word_length; index++) {
    if (index%2==0) {
        var even_number=word.charAt(index)
        console.log(even_number);
    }
}

console.log("=====================================================================");


var string= " I love JavaScript"
var string_lemgth = string.length;
var toLowerCase = string.toLowerCase();
var vowels="aeiou"
var vowels_include = vowels.includes("a");
var count=0;
for (let index = 0; index < string.length; index++) {
   
    var char = toLowerCase.charAt(index);
    if (char==vowels_include ) {
          
          console.log(vowels_include);
          count=count+1;
          
    }
}

console.log("=============================03========================================");

var word='I am Angular Developer'
var word_length= word.length;
var to_lower_case = word.toLowerCase();

for (let index = 0; index < word_length; index++) {
   
   var  result=to_lower_case.charAt(index);
    if (result=='a' || result=='e' ||result=='i' ||result=='o' ||result=='u') {
        
        console.log(result);
        
    }
    
}

console.log("=====================================================================");

var show = " I am UI Developer"
var string_length = show.length -10;
var total="";

for (let index = string_length; index >0; index--) {
    var charr= show.charAt(index);
   
    total=total+charr;
}
console.log(total);

console.log("==============================05=======================================");

var number = 1+2+3+4+5;
var result_3=0;

for (let index = 0; index <=5; index++) {
    
    result_3=result_3+index
}
console.log(result_3);

console.log("==============================06=======================================");

function evenNumber(myName){
  
   var str =myName.length;

   for (let index = 0; index < str; index++) {
    var finalResult=myName.charAt(index);
    if (index%2==0 && finalResult!=" ") {
       
  
        console.log(finalResult);
    
    }
      
   }
}
evenNumber("Kashinath      Gopal      Jeure")
console.log("=======================");
evenNumber("Kashinath  Gopal   Jeure")

console.log("==============================07=======================================");

//print number 80 to 70  by using do-while
var myNumber=80;

do {
       console.log(myNumber);
        myNumber--;
} while (myNumber>=70);