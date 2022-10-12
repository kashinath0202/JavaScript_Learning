console.log("================== Q.No-1 (JavaScript) ==================");

var wordLengthSquare=function(arg1) {
    console.log("Word is :-",arg1);
    var WordLength = arg1.length;
    console.log(`Word Length is:- ${WordLength}`);
    return WordLength*WordLength;
   
}
var result=wordLengthSquare("JavaScript");  
  console.log(`(Return)Total word length Square is :- ${result}`);

  console.log("================== Q.No-1 (Google) ==================");
  
 var wordLengthSquare=function(value) {
    console.log(`Word is :-${value}`);
    var text=value.length;
    console.log(`Word Length is:-${text}`);
    return text*text;
 }
 var result=wordLengthSquare("Google");
 console.log(`(Return)Total word length Square is :-${result}`);

 console.log("================== Q.No-1 (Developer) ==================");
  
 var word=function (value) {
    console.log(`Word Length is:-${value}`);
    var value2=value.length;
    console.log(`Word Length is:-${value2}`);
    return value2*value2;
 }
 var result=word("Developer");
  console.log(`(Return)Total word length Square is :-${result}`);

  console.log("================== Q.No-2.1 (JavaScript) ==================");

  var string=function() {
    var rev="I am Angular Developer"
    console.log(`The String is:- ${rev}`);
    console.log(`The Reverse of String:- ${rev.split(" ").reverse()}`);
    console.log(`The Reverse of All Character:- ${rev.split("").reverse()}`);
    console.log(`The String Length is :- ${rev.length}`);

    console.log("================== Q.No-2.2 (JavaScript) ==================");

    var splitResult = rev.split(" ");
           console.log(`String :- ${splitResult}`);
           console.log(`Total String Words is :- ${splitResult.length}`);
           
           var leng1 = 22;
           var leng2=4;
           var divide =leng1/leng2;
           console.log(`String Length Divided by total no.of Word:-  ${divide}`);
           console.log(`String Length Multiply by total no.of Word:-  ${leng1*leng2}`);

console.log("================== END ==================");

        //    var multi=leng1*leng2;
        
        //    log(`String Length Multiply by total no.of Word${multi}`)
  }
  var result=string();