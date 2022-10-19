console.warn(" Q. No.01 The total count of vowels using include() for string I am very good IT Developer ");

var string="I am very  good IT Developer";
var stringLower= string.toLowerCase();
var stringLength = stringLower.length;
var isVowels="aeiou";
var countVowels=0;

for (let index = 0; index < string.length; index++) {

   var vowels=stringLower.charAt(index);
   var totalVowels=isVowels.includes(vowels);
   if (totalVowels) {
      countVowels=countVowels+1;
   }
}
console.log(`  The total count of vowels =  ${countVowels}`);


console.warn(" Q. No.02 write function get sum cube numbers form 01 to 5 ");

function cube() {
    add=0
   for (let index = 1; index <= 5; index++) {
      add=add+index*index*index;
    
   }
   console.log(`  sum cube numbers form 01 to 5 = ${add}`);
}
cube();


console.warn(" Q. No.3.1.1 The given string only print on ODD positional character & do not consider empty space ");

function oddPositionedChar(word) {
    var strLength=word.length;
    oddChar="";
    for (let index = 0; index < strLength; index++) {
      
        var result=word.charAt(index);
        if (index%2!==0 && result!=" ") {
            oddChar=oddChar+result;
        }
    }
    console.log(oddChar);
}
oddPositionedChar("Hard work always pays back");
oddPositionedChar("Soon I will be Angular IT Champ")