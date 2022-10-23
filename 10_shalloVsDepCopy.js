let person = {
    name: "Mohit",
    age : 31,
    city : "Pune",
    address: {
        pin: 431202,
        street: "Kanch pokali"
    }
}
let student = person;                          // shallow copy

student.city = "Mumbai";                        
person.age = 33;
console.log(student.city, person.city);   // shallow copy

console.log(student.age, person.age);       // shallow copy


let myName="kashi";
let myFriendName=myName;

console.log(myFriendName);
                                 // Deep copy see in the next page 10_spread_operator