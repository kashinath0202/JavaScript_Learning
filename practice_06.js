console.warn("@@@@@@@@@@@@@@ INTERVIEW Question Set Page No - 21 ( Tricky Programs ) @@@@@@@@@@@@@@");

console.warn("============== Find the First 7 Even Numbers ===============");

countEven = 0;

for (let index = 0; index < 100; index++) {
   
    if (index%2==0) {
        console.log(index);
        countEven = countEven + 1;
        if (countEven==7) {
            break;
        }
    }
}

console.warn("============== Find the First 10 ODD Numbers ===============");

countOdd = 0 ;
for (let index = 0; index < 100; index++) {
   
     if (index%2!=0) {
        console.log(index);
        countOdd = countOdd +1 ;
        if (countOdd==10) {
            break;
        }
     }
}


console.warn("============== 11 number prime number or not ===============");

function primeCheck(value){

    for (let index = 2; index < value; index++) {
        if (value%index==0) {
            
            return false;
        }
        
    }
    return true
}
console.log(primeCheck(11));   // It 11 is prime number;


console.warn("============== 11 number prime number (true or false) ===============");

let  primeNumber = 11;       // It is not a Prime Number
var isPrimeNumber = true;

    for (let index = 2; index < primeNumber; index++) {
        
        if (primeNumber % index == 0) {
            isPrimeNumber = false;
    }
}

if (isPrimeNumber == true) {
     console.log(`${primeNumber} - is value Prime Number`);
}else{
    console.log(`${primeNumber} - is value not Prime Number`);
}
   
console.warn("============== Find First 10 prime Number ===============");
  

    for (let index = 1; index < 100; index++) {
       if (100 % index ==0 ) {
         console.log(100);
       }
        
    }


