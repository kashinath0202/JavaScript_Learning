console.warn("Assignment-3 -- ========= Map() ==========  --(Page No- 33)");

console.warn("1. Add 10 into each element log new array");

let array_numbers = [20,11,40,25,23,11,9,31,60,2,9];

array_numbers.map((value)=>{

    let newArray= value +10;
    console.log(newArray);
});

console.warn("2. Square into each element log new array");

array_numbers.map((square)=>{

    let allValueSquare = square * square;

    console.log(allValueSquare);
});

console.warn("3. index value plus into each element log new array");

array_numbers.map((value,index)=>{

    console.log(value+index);
})