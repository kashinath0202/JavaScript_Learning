console.warn("@@@@@@@@@@@@@@ INTERVIEW Question Set Page No - 20 (Array Tricky Programs ) @@@@@@@@@@@@@@");
const array = [1, 6, 5, 3, 11, 23, 4];
console.log(array);

console.warn("========== How Merge In Two arrays =============");

// Using Spread Operator **  newArray =  [...firstArrayName,...secondArrayName];
// Using Object.Assign() **  newArray =  [{}, ...firstArrayName,...secondArrayName];
// Using Concat Method  **   newArray =  firstArrayName + secondArrayName

console.warn("========== Reverse in array =============");

reverseArray = array.reverse();
console.log(reverseArray);

console.warn("========== Remove The Duplicate Element  =============");

removeDuplicateElement = new Set(array)
console.log(removeDuplicateElement);  // In array No Duplicate Elements 

console.warn("========== Get the Sum of All elements In Array (Using For loop)  =============");

sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
  sum = sum + element
}
console.log(sum);

console.warn("========== Get the Sum of All elements In Array (Using ForEach Method)  =============");

totalCount = 0;
array.forEach((value)=>{

    totalCount = totalCount + value;
})
console.log(totalCount);


console.warn("========== Get the Multiplication of All elements In Array (Using For loop)  =============");
multiplication = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    multiplication = multiplication + multiplication * element
}
console.log(multiplication);


console.warn("========== Print the in ascending Order elements In Array (Using For loop)  =============");