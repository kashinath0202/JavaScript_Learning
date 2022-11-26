    console.warn("******************* ASSIGNMENT NO- 01 (Using String Te.) *******************");

fruits_seasonal =["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`1. Print on First Element                         : ${fruits_seasonal[0]} , ${fruits_seasonal[4]}`);

fruits_seasonal.unshift("Papaya");
console.log(`2. Add element Papaya in before Banana element    : ${fruits_seasonal}`);

fruits_seasonal.splice(4,1);
console.log(`3. Remove the Mango element                       : ${fruits_seasonal}`);

fruits_seasonal.push("PineApple")
console.log(`4. Add PineApple element at the last Position     : ${fruits_seasonal}`);

fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log(`5. Add element Dragon Fruit in before Water Melon : ${fruits_seasonal}`);

fruits_seasonal.splice(2,1,"Kiwi")
console.log(`6. Replace the element Orange with Kiwi           : ${fruits_seasonal}`);

console.log(`7. Print on Element Form index No. 01 to 04       : ${fruits_seasonal.slice(1,5)}`);

let fruitsLength = fruits_seasonal.length;
let sliced = fruits_seasonal.slice(fruitsLength-3);
console.log(`8. Last Three Elements Print use length property  : ${sliced}`);