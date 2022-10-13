console.warn("======================= Using NF & Ternary =======================");
console.warn("======================= 1.3.1 =======================");

function ternary(gender,age,boyName) {
    var condition= gender="male" && age>=21
    ?`Hey ${boyName} you are eligible for marriage.`
    :`Not eligible for marriage`;
    console.log(condition);
}
  ternary("Female",25,"Billgates")

  console.warn("======================= 1.3.2 =======================");

  function ternary(gender,age,boyName) {
    var condition_1= gender="male" && age>=21
    ?`Hey ${boyName} you are eligible for marriage.`
    :`Not eligible for marriage`
    console.log(condition_1);
}
  ternary("Male",17,"Stew Jobs")



console.warn("======================= .1.6.1 =======================");

function ternary(gender,age,girlName) {
    var condition_2= gender="Female" && age>=18
    ?`Hey ${girlName} you are eligible for marriage.`
    :`Not eligible for marriage`
    console.log(condition_2);
}
  ternary("Female",16,"Jenifer")

  console.warn("======================= .1.6.2 =======================");

function ternary(gender,age,girlName) {
    var condition_3= gender=="Female" && age>=18
    ?`Hey ${girlName} you are eligible for marriage.`
    :`Not eligible for marriage`
    console.log(condition_3);
}
  ternary("Female",27,"Malinda Gates")