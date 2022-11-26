console.warn(" QNo.01 Count the total number vowels using includes() for string == Good morning IT Champ ");

var str="Good morning IT Champ";

 var lengthString=str.length;                             
 var strLowercase= str.toLowerCase();
 var strLowercase="aeiou"
 var vowelsCount=0;

 for (let index = 0; index <= lengthString; index++) {
    var char = str.charAt(index);
    var vowelsLower=strLowercase.includes(char);
    
        if (vowelsLower) {
            vowelsCount = vowelsCount+1;
     }
 }
     console.log(`    The total numbers of vowels given string = ${vowelsCount}`);






console.warn(" QNo.02 write function to count vowels form the given string == I love JavaScript ");

function vowelString(myString) {
    var LowerString=myString.toLowerCase();
       var count=0;
    for (let index = 0; index <=LowerString.length; index++) {
       var charMy=LowerString.charAt(index);
        
       if (charMy=="a" || charMy=="e" || charMy=="i" || charMy=="o" || charMy=="u" ) {

            count=count+1
       }
       
    }
      console.log(`    The total count of vowels given string = ${count}`);
}
  vowelString("I love JavaScript")






  console.warn(" QNo.03 write function expression to sum all numbers form 01 to 10 ");
       
  var sumNumber= function () {
       add=0;
    for (let index = 0; index <=10; index++) {
           add= add+index;
    }
    console.log(`    The sum of 01 to 10 number = ${add}`);
  }
    sumNumber();




    console.warn(" QNo.04 write function get sum square numbers form 01 to 5 ");

function square() {
   adding=0;
  for (let index = 0; index <=5; index++) {
     adding=adding+index*index;
  }
  console.log(`    The sum of square of number 01 to 05 = ${adding}`);
}
square();





console.warn(" QNo.5.1.1 The given string only print on EVEN positional character & do not consider empty space ");

function evenPositionedChars(greet) {
    var result2="";
    for (let index = 0; index <= greet.length; index++) {    //problem
      
      var greetChar= greet.charAt(index);     //problem
      
      if (index%2==0 && greetChar!=" ") { 
          result2=result2+greetChar;
      }
    }
    console.log(`    ${result2} `);
    
}
evenPositionedChars("Hard work always pays back") ;

console.warn(" QNo.5.1.2 The given string only print on EVEN positional character & do not consider empty space ");

function evenPositionedChars(greet2) {
  var result4="";
  for (let index = 0; index < greet2.length; index++) {
    
    evenChar=greet2.charAt(index)
    if (index%2==0 && evenChar!=" ") {
      result4=result4+evenChar;
    }
  }
  console.log(`     ${result4}`);

}
evenPositionedChars("Soon I will be Angular IT Champ")



console.warn(" QNo.5.2.1 The given string only print on ODD positional character & do not consider empty space ");

function oddPositionedChars(greet3) {
  var result3="";
  for (let index = 0; index < greet3.length; index++) {
    oddgreet1= greet3.charAt(index);
    
    if (index%2!==0 && oddgreet1!=" ") {
      result3=result3+oddgreet1;
    }
    
  }
  console.log(`   ${result3}`);
}
oddPositionedChars("Hard work always pays back")



console.warn(" QNo.5.2.2 The given string only print on ODD positional character & do not consider empty space ");

function oddPositionedChars(greet3) {
  var result="";
  for (let index = 0; index < greet3.length; index++) {
    oddgreet= greet3.charAt(index);
    
    if (index%2!==0 && oddgreet!=" ") {
      result=result+oddgreet;
       
    }
    
  }
  console.log(`     ${result}`);
}
oddPositionedChars("Soon I will be Angular IT Champ")










// // Count the total number vowels using includes() for string → “Good Morning IT Champ”
// var countVowels = function(myString) {
//     console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
//     //var myString = "Good Morning IT Champ";
//     var vowelsLoweCase = "aeiou";
//     var vowelUpperCase = "AEIOU";
//     var vowelsCount=0;
//     for (let index = 0; index < myString.length; index++) {
//        var char =  myString.charAt(index);
//        var isLowerAvailable =  vowelsLoweCase.includes(char);
//        var isUpperAvailable =  vowelUpperCase.includes(char);
//        if (isLowerAvailable || isUpperAvailable) {
//             vowelsCount = vowelsCount + 1;
//        }
//     }
//     console.log(`Total Vowels count : ${vowelsCount}`);
// }
// countVowels("Good Morning IT Champ");


