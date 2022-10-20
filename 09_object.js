let Person = {

  fullName: "sachin Tedulakar",
  city: "pune",
  age: "25",
  isMarried: true,

  address: {                                       //nested object
    street: "pune road",
    city: "Mumbai",
    pinCode: 413302,
    state: "MH"
  },
  eat: function () {                                   //nested Function
    console.log("I am Vegetarian");
  },
  walk: function () {
    console.log(" I do Walk Everyday");            //nested Function
  },
  details: function () {
    let personalDetails = `Details are :${this.fullName}, ${this.city} , ${this.age} ,${this.isMarried}`;       //concataion    // age delete
    return personalDetails;
    console.log(`${this.fullName}, ${this.city}, ${this.age}, ${this.isMarried}`);          //Not Reachabale
  }

}
console.log(typeof Person);                         // type of

Person.profession = "cricketer";                       // adding

Person.fullName = "Sachin Ramesh Tendulakar";       // update

delete Person.age;                                  // delete    

Person.address.country = "India";                     // adding in nested block 

Person.address.street = "Mumbai Road";                 // update in nested block

delete Person.address.pinCode;                       // delete in nested block

console.table(Person);                                // log on table

console.table(Person.address);                       // log on table in nested block

Person.eat();

// let pDetail=Person.details();

console.log(Person.details());                         // Function return

console.log(Object.keys(Person.fullName));             // keys defined

console.log(Object.entries(Person.fullName));           //entries defined

console.log(Object.values(Person.fullName));            // values defined