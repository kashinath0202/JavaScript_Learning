console.warn("Assignment-3 -- ========= Filter() ==========  --(Page No- 36)");

array_numbers = [20,11,40,25,37,49,9,90,60,2,19];

console.warn("==================== Find The Number grater than equal 50 ==============================");

array_numbers.filter((values)=>{

    if(values>=50){
        console.log(values);
    }
});

console.warn("=============== Find the Even Numbers all ================");

let evenNumber = array_numbers.filter((even)=>{

    // if (even%2==0) {
    //     console.log(even);
    // }
return even%2==0;

});
console.log(evenNumber);

console.warn("=============== Find the Odd Numbers all ================");

let oddNumbers = array_numbers.filter((odd)=>{

    return odd%2!=0;
});
console.log(oddNumbers);

console.warn("=============== Find the numbers which are multiple 5 ================");

let myNumber = array_numbers.filter((value)=>{

    return value%5==0;
});
console.log(myNumber);

console.warn("=============== Find the numbers in between 20 to 50 ================");

let findNumbers = array_numbers.filter((value)=>{

    return value>20 && value<50;
});
console.log(findNumbers);
