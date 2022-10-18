console.warn("Q.No. 1.1.1 Reverse the complete string");

function reverseString(str) {
   result="";
    var stringLength = str.length - 1;

    for (let index = stringLength; index >=0; index--) {

        result=result+str.charAt(index);
        
    }
    console.log(result);
}
 reverseString("Hard work always pays back");
 reverseString("Soon I will be Angular IT Champ");