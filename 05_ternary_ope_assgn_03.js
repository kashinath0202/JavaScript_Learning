console.warn("======================= Using FE & Ternary =======================");

  console.warn("======================= 1.3.1 =======================");

var ternary=function(grad_score,hsc_score,ssc_score,your_name){
  var condition= grad_score >=70 || hsc_score >= 80 || ssc_score >=90
  ? `Congrates${your_name} you are eligible for TCS interview.`
  :`Unfortunately you are not eligible for interview.`
   console.log(condition);
}
var result=ternary(80,86,90," Kashinath");

console.warn("======================= 1.3.2 =======================");

var ternary=function (grad_score,hsc_score,ssc_score,your_name) {
    var condition= grad_score >=70 || hsc_score >= 80 ||ssc_score >=90
    ?`Congrates${your_name} you are eligible for TCS interview.`
    :`Unfortunately you are not eligible for interview.`
      console.log(condition);
}
var result=ternary(70,65,55," Sachin");

console.warn("======================= 1.3.2 =======================");

var ternary=function (grad_score,hsc_score,ssc_score,your_name) {
    var condition= grad_score >=70 || hsc_score >= 80 ||ssc_score >= 90
    ?`Congrates${your_name} you are eligible for TCS interview.`
    :`Sorry ${your_name} Unfortunately you are not eligible for interview.`
      console.log(condition);
}
var result=ternary(60,79,88,"Shankar");