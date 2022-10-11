console.warn("============================Q.No:-01 (square value)============================");

var square= function (value1,value2){
  var result=(value1*value2);
  console.log("The Square of 5:",result);
}
square(5,5);
  
var square1=function (value1,value2) {
    var result=(value1*value2);
    console.log("The Square of 6:",result);
}
square1(6,6);

var square1=function (value1,value2) {
    var result=(value1*value2);
    console.log("The Square of 25:",result);
}
square1(25,25);

var square1=function (value1,value2) {
    var result=(value1*value2);
    console.log("The Square of 100:",result);
}
square1(100,100);

var number=function (value1,value2) {
    var result=(value1*value2);
    console.log("The Square of 50:",result);
}
number(50,50);

console.warn("============================Q.No:-02 (Function Type)============================");

var word=function() {
}
word();
console.log("Function Type is:",typeof(word));

console.warn("============================Q.No:-03 (Area Of Triangle Function.E)============================");

var triangle=function(value1,value2) {
    var result=(1/2*(value1*value2));
    console.log("The base-45 & height-34 Area Of Triangle is:",result);
}
triangle(45,34);

console.warn("============================Q.No:-04 (Area Of Rectangular Function.E Type)============================");

var Rectangular=function(value1,value2) {
    var result=(value1*value2);
    console.log("The length-499M & Width-917M Area of Rectangal:",result,"sqm");
}
Rectangular(499,917);

console.warn("============================Q.No:-05 (Swap Value Function.E)============================");

var swap_values=function(value1,value2) {
    console.log("Before Swapping Value:");
    console.log(value1,value2);
    console.log("After Swapping Value:");
    var temp;
    temp=value1;
    value1=value2;
    value2=temp;
    console.log(value1,value2);
}
swap_values("Virat","Anushka");

console.warn("============================Q.No:-05 (String Function.E)============================");

var word = "JavaScript the most papular language";

console.log(word);

console.log("The total length of word;",word.length);

console.log("The S index Of of word;",word.indexOf('S'));

console.log("The 'lang' index Of word", word.indexOf('lang'));

console.log("The last Character of word",word.charAt(word.length-1));

console.log("The First Character of Word",word.charAt(word.length-3));