let person = {
    name: "Mohit",
    age : 31,
    city : "Pune",
    address: {
        pin: 431202,
        street: "Kanch pokali"
    }
}
console.log(person.name, person.age, person.city);  
console.log(person);
// let student = {...person};                 //  Spread operator ( not use of nested object)

let student = JSON.parse(JSON.stringify(person));   //json operator    (use of nested object)

student.city = "Mumbai";
person.age = 33;
console.log(student.city, person.city);             // deep Copy
console.log(student.age, person.age);               // deep Copy

student.address.street = "Khav Galli";
console.log(student.address.street);
console.log(person.address.street);

console.table(person);
console.table(student);
