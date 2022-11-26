console.warn("==== Q No.01 WAP tp print numbers from 5 to 15 by incrementing 1====");

//WAP tp print numbers from 5 to 15 by incrementing 1
 
for (var number = 5; number<=15; number++) {
       console.log(number);
}

console.warn("=== Q.02 WAP to print numbers from 50 to 40 by decrementing by 1 ===");

for(var value=50; value>=40; value--){
    console.log(value);
}

console.warn("=== Q.03 WAP to find first 15 odd numbers ===");
totalCount = 0;
for(var odd=0; odd<=100; odd++){
  if (odd%2!=0) {
    console.log(odd);
    totalCount = totalCount + 1 ;
    if (totalCount==15) {

      break;
      
    }
  }
     

}

console.warn("=== Q.04 WAP to find first 10 even numbers ===");
count = 0;
 for(var num=0;num<=50;num++){
   
    if (num%2==0) {
        console.log(num);
count = count + 1;
if (count==10) {
  break;
}

    }
 }

 console.warn("=== Q.05 WAP to print table of 5 like 5,10,15,20----50 numbers ===");

for (let fifthValue = 5; fifthValue <= 50; fifthValue=fifthValue+5) {
 
  console.log(fifthValue);
}

console.warn("=== Q.06 WAP to print table of 10 like 10,,20,30----100 numbers ===");
 
for (let tenthValue = 10; tenthValue <= 100; tenthValue=tenthValue+10) {

  console.log(tenthValue);
  
}
console.warn("=== Q.07 WAP to print table of 10 in reverse order like  100,90,80,70,----10 numbers ===");

for (let reversValue = 100; reversValue >= 10; reversValue=reversValue-10) {
  
  console.log(reversValue);
  
}
