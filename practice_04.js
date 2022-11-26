console.warn("@@@@@@@@@@@@@@ INTERVIEW Question Set Page No - 19 (Remove The Duplicate elements ) @@@@@@@@@@@@@@");
console.warn("*************** Array (Numbers) *****************");

const arrayOfNumbers = [1, 6, 5, 3, 11, 23, 4, 6, 3, 11];
console.log(arrayOfNumbers);

console.warn("++++++++++++++++++ Remove The Duplicate elements (Using Set()) +++++++++++++++++");

var removeDuplicateArray = new Set(arrayOfNumbers);
console.log(removeDuplicateArray);


console.warn("*************** Array (Names) *****************");

const arrayOfNames = ["Kamat", "Memon", "Nashpati", "Taimur", "Menon", "Kamat", "Andy", "Taimur"];

console.log(arrayOfNames);

removeDuplicateArrayNames = new Set(arrayOfNames);

console.log(removeDuplicateArrayNames);