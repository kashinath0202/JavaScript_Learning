console.warn("***************** Assignment No.02 *****************");

let array_numbers=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`1. Total length of array                             : ${array_numbers.length}`);

console.log(`2. Print on first and last element                   : ${array_numbers[0]},${array_numbers[10]}`);

// let array_length = array_numbers.length-3;
// let slice_array = array_numbers.slice(array_length)
console.log(`3. Print on last third element using length property : ${array_numbers[8]}`);

console.log("4. Print all even numbers given array -");
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];

    if (element%2==0) {
     
        console.log(element);
    }
    
}

console.log("5. Print all odd numbers given array -");

for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    
    if (element%2!=0) {
        console.log(element);
    }
}

console.log("6. Print all even Positioned numbers given array -");

for (let index = 1; index < array_numbers.length; index=index+2) {
    const element = array_numbers[index];

           console.log(element);
    
}

console.log("7. Print all Odd Positioned numbers given array -");

for (let index = 0; index < array_numbers.length; index=index+2) {
    const element = array_numbers[index];
    
    console.log(element);
}

console.log("8. Print sum of all numbers given array -");

let count=0;

for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];

    count=count+ element;

} console.log(count);

console.log("9. Print numbers are multiple of 5 given array -");

for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    
    if (element%5==0) {

        console.log(element);
    }
}

console.log("10. 115 number in available in array -");

console.log(array_numbers.includes(115));

console.log("11. 23 number in available in array -");

console.log(array_numbers.includes(23));