console.warn("Assignment-3 -- ========= Reduce() ==========  --(Page No- 38)");

array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.warn("=============== Find The sum of all numbers ==================");
 
let sumNumbers = array_numbers.reduce((value,sumValue)=>{

    return value + sumValue
});
console.log(sumNumbers);

console.warn("=============== Find The sum of all even numbers ==================");

let filterNumber = array_numbers.filter((value1)=>{

    return value1%2==0;

});
console.log(filterNumber);

let reduceNumber = filterNumber.reduce((filterNumber,value)=>{

return filterNumber + value

});
console.log(reduceNumber);