let map = new Map();
map.set(22,"sachin");
map.set(11,"Dravid");
map.set(33,"Gangully");
map.set(77,"sehwag");

console.log("============Adding duplicate key==========");

map.set(11,"Gutam");
console.log(map);

console.log("====== reterving value===========");

let value= map.get(33)
console.log(value);

console.log(map.get(99));  //undefined


console.log("====== Delete record===========");

map.delete(11);
console.log(map);

console.log("====== When key & value duplicate add===========");

map.set(77,"sehwag")

console.log("====== is key available===========");

let isAvailable = map.has(22);
console.log(isAvailable);

console.log("====== returns all  keys()===========");

let allKey = map.keys();
console.log(allKey);

console.log("====== returns all value using for of loop===========");

let allValues = map.keys();

for (const key  of allValues) {

    let all = map.get(key)
    console.log(all);
}


// console.log("------ Traversing over map collection --------");
// let setOfKeys = map.keys();
// console.log(setOfKeys);
// for (const key of setOfKeys) {
//     console.log(map.get(key));
// }


// class Person {
//     constructor(rollNo, fullName, city, age, gender){
//         this.rollNo = rollNo;
//       this.fullName =   fullName;
//       this.city = city;
//       this.age = age;
//       this.gender = gender;
//     }
//     details(){
//         console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
//     }
// }
// let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
// let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
// let personBill = new Person(44, "Billgates", "USA", 67, "Male");

// let mapOfPersons = new Map();
// mapOfPersons.set(22, personAnil);
// mapOfPersons.set(33, personAnita);
// mapOfPersons.set(44, personBill);

// let mapKeys = mapOfPersons.keys(); // 22   33   44
// for (const key of mapKeys) {
//      let personObject = mapOfPersons.get(key);
//      personObject.details();

// }
