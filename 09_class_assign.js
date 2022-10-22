console.warn("=================================== Vehicle Class ===================================");

class Vehicle {
    constructor(name, company, color, Mileage, FuelTankCapacity, maxSpeed, price) {
        this.name = name;
        this.company = company;
        this.color = color;
        this.Mileage = Mileage;
        this.FuelTankCapacity = FuelTankCapacity;
        this.maxSpeed = maxSpeed
        this.price = price;
    }

}
let vehicle_1 = new Vehicle('Unicorn', 'Honda', 'Black', '60km/L', '13L', '110km/h', '1.10lakh to 1.35 lakh');
let vehicle_2 = new Vehicle('Shine', 'Honda', 'red-black', '65km/L', '12L', '100km/h', '1.01 lakh to 1.05 lakh');
let vehicle_3 = new Vehicle('Pulsar220', 'Bajaj', 'black', '40km/L', '15L', '140km/h', '1.40 lakh to 1.60 lakh');
let vehicle_4 = new Vehicle('KTM', 'Bajaj', 'SilverMetallic', '35km/L', '14L', '160km/h', '1.90 lakh to 2.30 lakh');
let vehicle_5 = new Vehicle('Splendor', 'Hero', 'black', '65km/L', '13L', '85km/h', '1 lakh to 1.05 lakh');

console.log(vehicle_1);
console.log(vehicle_2);
console.log(vehicle_3);
console.log(vehicle_4);
console.log(vehicle_5);

console.warn("=================================== College Class ===================================");

class College {
    constructor(collegeName, principalName, contactNo, city, state) {
        this.collegeName = collegeName;
        this.principalName = principalName;
        this.contactNo = contactNo;
        this.city = city;
        this.state = state;
    }
}
let college_1 = new College('KECSP', 'S.P.Patil', '9999999999', 'Pandharpur', 'Maharashtra');
let college_2 = new College('FCOES', 'S.R.Pawar', '8888888888', 'Sangola', 'Maharashtra');
let college_3 = new College('COEP', 'S.S.Bhinge', '7777777777', 'Pune', 'Maharashtra');
let college_4 = new College('SBMPCV', 'B.M.Patil', '0000000000', 'Vijaypur', 'Karanataka');

console.log(college_1);
console.log(college_2);
console.log(college_3);
console.log(college_4);

console.warn("=================================== For In Loop ===================================");


for (const key in college_1) {
    if (Object.hasOwnProperty.call(college_1, key)) {
        const element = college_1[key];
        console.log(`${key} - ${element}`);

    }
}

console.warn("=================================== For In Loop ===================================");

for (const key in college_2) {
    if (Object.hasOwnProperty.call(college_2, key)) {
        const element = college_2[key];
        console.log(`${key} - ${element}`);
    }
}

console.warn("=================================== For In Loop ===================================");

for (const key in college_3) {
    if (Object.hasOwnProperty.call(college_3, key)) {
        const element = college_3[key];
        console.log(`${key} - ${element}`);
    }
}

console.warn("=================================== For In Loop ===================================");

for (const key in college_4) {
    if (Object.hasOwnProperty.call(college_4, key)) {
        const element = college_4[key];
        console.log(`${key} - ${element}`);
    }
}

console.warn("=================================== instanceof ===================================");

let result = college_1 instanceof College;
console.log(result);

let result_1 = college_2 instanceof College;
console.log(result_1);

let result_2 = college_4 instanceof College;
console.log(result_2);