var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];

console.log("====== new set ()=======");

let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);

console.log(setOfNumbers);

console.log("====== Adding duplicate element =======");

setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");

console.log(setOfNumbers.size);

console.log("====== Deleting element 9 =======");

setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== Check whether element 7 available into set or not =======");

let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("====== Traversing set =======");
for (const element of setOfNumbers) {
    console.log(element);
}

console.log("====== clear the set or empty the set  =======");

//setOfNumbers.clear();
//console.log(setOfNumbers);

console.log("====== for keys()  =======");

setOfNumbers.keys();
console.log(setOfNumbers);

console.log("====== for entries()  =======");

setOfNumbers.entries();
console.log(setOfNumbers);


// console.log("====== Remove the duplicate value in array using for loop  =======");

// let setNumbers=[2,3,4,6,7,8,2,4];
// arrayNumbers= new Set()
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const element = arrayNumbers[index];
//     setNumbers.add(element);
//     console.log(arrayNumbers);
// }

   

console.log("====== Remove the duplicate value in array using spared operator =======");

let numbers=[2,3,4,6,7,8,2,4];
let result=[... new Set (numbers)];
console.log(result);



console.log("====== Remove the duplicate value in array using set =======");

let myNumbers= [1,2,3,4,2,3]

let finalResult = new Set(myNumbers);
console.log(finalResult);

console.log("====== Remove the duplicate value in two array spared operator =======");


finalResult= [...new Set(numbers),...new Set(finalResult)]

console.log(finalResult);

finalResult_2 = [...new Set(finalResult)]

console.log(finalResult_2);


console.log("====================== use string ==============================");


let myName = new Set();
 console.log(typeof myName);

 myName.add("kashinath");
 myName.add("jeure");
 myName.add("kashinath")

 console.log(myName);