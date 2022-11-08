console.warn("Assignment-B -- Using ForEach()  With arrow Function and Callback --(Page No- 25)");

console.warn("1. Log the array element  & index Numbers");

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach((value, index) => {

    console.log(index, value);
});

console.warn("2. Find The Positive Numbers print it");

arrayNumbers.forEach((value) => {

    if (value > 0) {

        console.log(value);

    }
});

console.warn("3. Find The Negative Numbers print it");

arrayNumbers.forEach((value) => {

    if (value < 0) {
        console.log(value);
    }
});

console.warn("4. Find The Even Numbers print it");

arrayNumbers.forEach((value)=>{

    if (value%2==0) {
        console.log(value);
    }
});


console.warn("5. Sum of all numbers Numbers print it");
sum = 0;
arrayNumbers.forEach((value)=>{

    sum=sum+value;
    
})
console.log(sum);

console.warn("6. Print on even positional numbers");

arrayNumbers.forEach((value,index)=>{

    if(value,index%2==0){
      console.log(value);
    }
});

console.warn("7. Print on ODD positional Array and if it is negative");

arrayNumbers.forEach((value,index)=>{

    if(value,index%2!=0 && value<0){
        console.log(value);
    }
})