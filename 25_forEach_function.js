

// // const arrayOfNumbers =[10, 20, 30, 40, 50]

// // arrayOfNumbers.forEach(function(currentValue,index,array) {

// //     console.log(currentValue,index,array);
// // });

// // const arrayOfNumbers =[10, 20, 30, 40, 50]

// // arrayOfNumbers.forEach((currentValue,index,array)=> {

// //     console.log(currentValue,index,array);
// // });



// const arrayOfNumbers =[10, -20, 30, 40, -50]

// arrayOfNumbers.forEach((currentValue,index,array)=> {
//     if (currentValue<0) {
//         console.log(currentValue,index);
//     }

// });


// console.log("===== Traversing map using forEach() =====");
// let map = new Map();
// map.set(22, "Sachin");
// map.set(11, "Dravid");
// map.set(33, "Gaungully");
// map.set(77, "Dravid");
// map.forEach( (key, value) => {
//     console.log(key, value);
// } );


console.warn("========================= ForEach() Using Callback =========================");
let arrayOfNumbers = [10, 20, 30, 40, 20, 10];

arrayOfNumbers.forEach(function (value, index, array) {
  console.log(value, index, array);
});


console.warn("========================= ForEach() Using Arrow Function =========================");

let myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

myArray.forEach((value, index, array) => {
  console.log(value, index, array);
});


console.warn("========================= ForEach() Using Arrow Function (One Line) =========================");

let myArrays = [10, 20, 30, 40, 50, 60, 70, 80, 90];

myArrays.forEach((value, index, array) => console.log(value, index, array));


console.warn("========================= ForEach() Using Arrow Function find Negative Numbers =========================")

let negativeArrays = [10, -20, 30, 40, -50, 10, 70, -80, 20];

negativeArrays.forEach((negativeValues) => {
  if (negativeValues < 0) {
    console.log(negativeValues);
  }
})

console.warn("======== Traversing  Sap() Method Using ForEach() & Arrow Function  ===========")


let traversingSetArray = new Set(negativeArrays);

traversingSetArray.forEach((element) => {
  console.log(element);
});

console.warn("======== Traversing  Map() Method Using ForEach() & Arrow Function   ===========")

let myMap = new Map();
myMap.set(11, "Akash");
myMap.set(22, "Sunil");
myMap.set(33, "Anil");
myMap.set(44, "Sachin");
myMap.set(55, "Sandip");

myMap.forEach((key,value)=>{
console.log(value,key);  
})

console.warn("======== Traversing Object Array Using ForEach() & Arrow Function   ===========")

class Person {
  constructor(fullName, city, age, gender){
    this.fullName =   fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
  }
  details(){
      console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
  }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Bill Gates", "USA", 67, "Male");

const array = [ personAnil, personAnita, personBill];

array.forEach((value)=>{
console.log(value.fullName);
})

/////method traverse

array.forEach((value)=>{
  console.log(value.details());
  })