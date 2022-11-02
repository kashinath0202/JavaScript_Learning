

arrayOfNumbers=["Kamat","Memon","Nashpati","Taimur","Menon","Kamat","Andy","Taimur"];

console.log("============= 1. Original Array ============= ");

console.log(arrayOfNumbers);

let nonDuplicate= new Set(arrayOfNumbers);

console.log("============= 2. After Removing Duplicate element is array ============= ");

       console.log(nonDuplicate);

console.log("============= 2. Total count of Duplicate element ============= ");

let totalOriginalCount = arrayOfNumbers.length;

let totalNonDuplicateCount = nonDuplicate.size;

let finalResult = totalOriginalCount - totalNonDuplicateCount

console.log(finalResult);

console.log("============= 2. Unique Elements available ============= ");


console.log(totalNonDuplicateCount);