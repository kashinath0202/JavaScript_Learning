console.warn("Assignment-1 -- ========= Sorting() ==========  --(Page No- 40)");

 array_roll_numbers = [113,45,56,11,32,45,109,799,56,45];

console.warn(" 1. ============== Reverse the array ===============");

let total =  array_roll_numbers.reverse((firstValue)=>{

    return firstValue
});
console.log(total);

console.warn(" 2. ============== Reverse the array ===============");

let acendingOrder = array_roll_numbers.sort((firstValue,secondValue)=>{
    
    return (firstValue > secondValue ? 1 : -1  )
});
console.log(acendingOrder);

console.warn(" 3. ============== Descending the array ===============");

let Descending_order = array_roll_numbers.sort((num1,num2)=>{

    return (num1 < num2 ? 1: -1)
});
console.log(Descending_order);

console.warn(" 4. ============== Descending order with reverse() ===============");

let result = Descending_order.reverse((element)=>{

    return element
});
console.log(result);

console.warn(" 4. ============== find the greatest number of array ===============");

let greatNumbar = array_roll_numbers.sort((num3,num4)=>{

    return (array_roll_numbers>num4);
});
 console.log(greatNumbar);

 console.warn(" 4. ============== find the Smallest number of array ===============");

 let smallestNumbar = array_roll_numbers.sort((num3,num4)=>{

    return (num3-num4);
});
 console.log(smallestNumbar);

 console.warn(" 5. ============== remove duplicate number of array ===============");

 let duplicateNmuber = new Set(array_roll_numbers);

 console.log(duplicateNmuber);
 

