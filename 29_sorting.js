
console.warn("==================== Data type string  =================== ");

let NameOfArray = ["Kash", "Sachin", "Sandip", "Anil", "Dhanesh", "Yogesh"];

NameOfArray.sort();

console.log(NameOfArray);

console.warn("==================== Data type Number =================== ");

const array_numbers = [200, 1, 400, 3, 23, 0, 39, 9, 60, 20, 110, 654, 80, 90];

array_numbers.sort();

console.log(array_numbers);   // consider of only  first Digit


console.warn("==================== Ascending order Value  =================== ");

array_numbers.sort((firstValue,secondValue)=>{

    return (firstValue>secondValue ? 1: -1)

})

console.log(array_numbers);


////////////////////  OR ///////////////

console.warn("==================== Ascending order Value  =================== ");

array_numbers.sort((firstValue,secondValue)=>{

    if(firstValue>secondValue){
        return 1;
    }else{
        return-1;
    }

})

console.log(array_numbers);


console.warn("==================== Descending order Value  =================== ");

array_numbers.sort((firstValue,secondValue)=>{

    return (firstValue<secondValue ? 1: -1)

})

console.log(array_numbers);