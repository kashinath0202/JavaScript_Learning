class Bank {
    constructor(bankName,location,accountNo,ifscCode,interestRate){
                 this.bankName=bankName,
                 this.location=location,
                 this.accountNo=accountNo,
                 this.ifscCode=ifscCode,
                 this.interestRate=interestRate
    }
}

let axis_bank = new Bank("Axis Bank","Pune","1122334455","AXIS0002233","12%");

let sbi_bank = new Bank("State Bank Of India","Mumbai","9988774455","SBIN0007156","13%");

let icici_bank = new Bank("ICICI Bank","Nagapur","8855220033","ICIC0002288","11.5%");

let kotak_bank = new Bank("Mahindra Kotak Bank","Solapur","778899665544","MHKO21365","14%");

let hdfc_bank = new Bank("HDFC Bank","Sangli","5566448899","HDFC229988","12.5%");

let panjab_bank = new Bank("Panjab National Bank","Satara","3355669988","PANJ993322","10%");


console.warn("============================================ Bank Name & Bank Location =========================================");

let allBank = [axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank]

for (let index = 0; index < allBank.length; index++) {
    const element = allBank[index];
    console.log(`1.Bank Name : ${element.bankName},  2. Bank Location  : ${element.location}`);
}

console.warn("=========================================== Find The Object Kotak Bank Using For loop ===============================");

for (let index = 0; index < allBank.length; index++) {
    const element = allBank[index];
    if (element==kotak_bank) {
        
        console.log(element);
    }
}

console.warn("=========================================== Find The Object Kotak Bank Using For of loop ===============================");

for (const iterator of allBank) {

    if (iterator==kotak_bank) {
        console.log(iterator);
    }
   
}


console.warn("========================================================= Details=========================================================");

// for (let index = 0; index < allBank.length; index++) {
//     const element = allBank[index];

//     console.log(element.bankName,element.location,element.accountNo,element.ifscCode,element.interestRate);
   
// }

for (const element of allBank) {
    console.log(element);
}


