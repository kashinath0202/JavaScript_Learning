

const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];

let result = array_numbers.map((elements)=>{
     return elements +20
});
console.log(result);

console.warn("==================================================");

const arrayOfNumbers=[20,31,40,25,23,11,29,9,60,2,11];

let results = array_numbers.map((elements,index)=>{
    if (index<=3) {                       // only plus first 4 value
       return elements + 20;     
    }
    return elements;

});
 console.log(results);