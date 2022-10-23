console.warn("***************************** Q.No.01 (Shallow clone) *****************************");

const array_nums = [20,3,4,56,90,400,49];
console.log(`Before Shallow Clone -                                   ${array_nums}`);


array_nums[2]=55;
array_nums[3]=66;
console.log(`Update clone array with values - 55,66 before value 90 - ${array_nums}`);

let array_nums_1=array_nums;
console.log(`After Shallow Clone -                                    ${array_nums_1}`);

console.warn("***************************** Q.No.02 (Deep Clone) *****************************");

  console.log(`Original array -                                         ${array_nums}`);

array_nums_1 = [...array_nums];

array_nums_1[6]=20;
array_nums_1.push(02)
console.log(`Deep Clone                                               ${array_nums_1}`);
array_nums.push(10);
array_nums.push(25);
console.log(`After update Array at last position -                    ${array_nums}`);
  

console.warn("***************************** Q.No.03 (Concat) *****************************");

const array_even=[2,30,14,8];
console.log(`array_even  -  ${array_even}`);
console.log(`array_nums  -  ${array_nums}`);
    console.log("=============== using Concat ===============");
 let array_concat= array_even.concat(array_nums)
 console.log(array_concat);

 console.log("========= using Spread operator of concat =========");
let array_3=[...array_even,...array_nums]
console.log(array_3);

console.warn("***************************** Q.No.04 *****************************");

const employee_info ={
    emp_id:27,
    emp_name:"John Doe",
     sallay:{
        july_month:"40,0000INR",
        aug_month:"50,000INr",
        jun_month:"65000INR"
     },
     address:{
        locality:{
            colany:"OM Vrindavan Society",
            street:"Kanch Pokali, 431202",
        },
          city:"mumbai",
          state:"Maharashtra",
          contry:"India"
     },
     Mobiles:["+91 8600 3456 88","1800- 4567 31","+91 9096 5678 77"]
}

console.warn("***************************** Q.No.05 (a) *****************************");

console.table(employee_info.address);

console.warn("***************************** Q.No.05 (b) *****************************");

console.table(employee_info.Mobiles);

console.warn("***************************** Q.No.06 (a) Deep Cloning using spread Operator(...) *****************************");

// let my_info=employee_info;

let my_info={...employee_info}

employee_info.address.locality.street="Kaw Galii, 414401"

 employee_info.Mobiles[0]='+91 9096 9492 02'

console.table(employee_info);
console.warn("****** Q.No.06 (d) - Changes in same time two Object Becoz of using spread Operator(...)  ******");

console.warn("***************************** Q.No.07 (a) Deep Clone using JOSN Stringify *****************************");

let my_info_2= JSON.parse(JSON.stringify(employee_info));

my_info_2.sallay.july_month="80,000INR";

my_info_2.address.contry="United Kingdom"

console.table(my_info_2);

console.table(employee_info);