
console.warn("==================== filter() ==============================");

const arrayOfNumbers=[20,31,40,25,23,11,29,9,60,2,11];

let myArray = arrayOfNumbers.filter((element)=>{
    if (element>=23) {
        
        return element
    }
})
console.log(myArray);


console.warn("==================== filter() ==============================");



let praArray = [10,12,45,46,4,6,24,3,465,21,87];

let finalResult = praArray.filter((element)=>{
    
       return element>=20 ;
})
console.log(finalResult);


console.warn("==================== filter() ==============================");
const array_numbers=[20,1,40,3,23,0,29,9,60,2,11];

let newArray = array_numbers.filter((element)=>{
    return element>=4
})
console.log(newArray);



