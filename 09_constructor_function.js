class Person{
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

let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);

sachin.details();

                    // constructor function

function person (fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
let tend = new person("Sachin Tendulkar", "Pune", 45, "Male");
console.log(tend);

let sharma = new person("Rohit Sharma", "Pune", 32, "Male");
console.log(sharma);
