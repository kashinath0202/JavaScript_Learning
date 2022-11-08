console.warn("Assignment-C -- Using ForEach()  With arrow Function and Callback --(Page No- 26)");

class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monali", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, 'Vinayak', "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const all_emp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

console.warn("1. Print on TCS emp. emp_name & emp_company");

all_emp.forEach((employee) => {

    if (employee.emp_company == "TCS") {

        console.log(`1. Employee Name - ${employee.emp_name},2. Employee Company -${employee.emp_company}`);
    }

});

console.warn("2. Print on emp_salary is more than 50000 ");

all_emp.forEach((employee) => {

    if (employee.emp_salary >= 50000) {
        console.log(employee);
    }
});

console.warn("3. Find on sum of all employee salary ");

total = 0;

all_emp.forEach((employee) => {

    let sum = employee.emp_salary;
    total = total + sum;

});
console.log(total);

console.warn("4. Find on sum of all employee salary & get average  ");

total = 0;

all_emp.forEach((employee) => {

    let sum = employee.emp_salary;
    total = total + sum;

    // var totalLength = all_emp.length;
    // console.log(totalLength);

});
console.log(total / all_emp.length);

console.warn("5. Find on IT & HR emp_dept emp. whose salary is grater than & equal  75000/- ");

all_emp.forEach((employee) => {

    if (employee.emp_dept == "HR", "IT" && employee.emp_salary >= 75000) {

        console.log(employee);
    }
})

