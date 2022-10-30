
const person = {
    name: "Mohit",
    rollNo : 1234
}
Object.freeze(person);

person.name = "Mohit Sharma";// Modification not considered as person object is freezed
person.street = "AS CLUB"; // Adding new property is not considered as person object is freezed
console.log(person);


const arrayNumbers = [2, 4, 5, 6, 7];
// arrayNumbers = [ ];
Object.freeze(arrayNumbers); // Immutable: We can not change the array values after creation or defining
// arrayNumbers.push(99);
// console.log(arrayNumbers);


const student = {
    name: "Mohit",
    rollNo : 1234
}

let studentClone = Object.assign({}, student);
console.log(studentClone);

console.warn("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
const student2 = {
    name: "Mohit",
    rollNo : 1234
}
const address = {
    city: "Pune",
    street: "AS CLUB"
}

let studentClone2 = Object.assign({}, student2);// Deep cloning will be performed
studentClone2.name = "Mohit Sharma";
console.log(studentClone2);
console.log(student2);


console.warn("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

const student1 = {
    name: "Mohit",
    rollNo : 1234
}
const address1 = {
    city: "Pune",
    street: "AS CLUB"
}

let studentClone3 = Object.assign({}, student1);// Deep cloning will be performed
studentClone3.name = "Mohit Sharma";
console.log(studentClone3);
console.log(student1);

let mergedObject = Object.assign({}, student1, address1);
console.log(mergedObject);
