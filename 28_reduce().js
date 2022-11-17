console.log("===================== reduce()=========================");

let arrayOfNumbers = [54,54,55,6,24,5,4,66]

let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);


console.log("===================== reduce()=========================");

const array_numbers=[20,1,40,3,23,0,29,9,60,2,11];

let result = array_numbers.reduce((element,sumElement)=>{
  
    return element + sumElement;
})
console.log(result);










