console.warn("@@@@@@@@@@@@@@ INTERVIEW Question Set Page No - 18 (Array Basic Program ) @@@@@@@@@@@@@@");


const array = [1, 6, 5, 3, 11, 23, 4];

console.warn("========== Traverse the using ForEach loop ==============");

array.forEach((value, index) => {

    console.log(index, value);
});

console.warn("========== Print the ODD indexed elements ==============");

for (let index = 1; index < array.length; index = index + 2) {
    const element = array[index];
    console.log(element);
};

console.warn("========== Print the array in reverse order ==============");

var reverseArray = array.reverse();
console.log(reverseArray);

console.warn("========== Print the last element using the Length property  ==============");

console.warn("========== Print the Third last element using the Length property  ==============");

var lastelement = array.length;


console.warn("========== Remove the last element on the array (Using POP()) ==============");

var removeEle = array.pop();
console.log(removeEle);
console.log(array);

console.warn("==========  add element in last position   (Using PUSH()) ==============");

var addLastPosition = array.push(99);
console.log(array);

console.warn("========== Adding Element In Beginning (Using Unshift()) ==============");

var addElement = array.unshift(10);
console.log(array);

console.warn("========== Replace the elements in middle in array (in fourth index one value replace) (Using Splice()) ==============");

var addMidArray = array.splice(4, 1, 2)
console.log(array);

console.warn("========== Find the element 5 From the array using (For Loop)  ==============");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == 5) {
        console.log(element);
    }
};

console.warn("========== Clone the array & deep clone (using Spread Operator [...]) ==============");

var newArray = [...array];

console.log(newArray);


console.warn("========== Find the element 5 From the array  (Using ForEach()) ==============");

array.forEach((value) => {
    if (value == 5) {
        console.log(value);
    }

});

console.warn("========== Find the element 5 From the array  (includes) ==============");

var isAvailable = array.includes(5);
console.log(isAvailable);


