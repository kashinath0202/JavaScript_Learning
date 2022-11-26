console.warn("Name = Kashinath Jeure");
console.warn("Assignment No = 02");

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
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy")

const all_emp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

console.warn("========== 1. Print on only TCS Emp.Name & Emp. Company ============");

for (const employee of all_emp) {
    if (employee.emp_company === "TCS") {
        console.log(`1. Employee Name = ${employee.emp_name},  2.Employee Company = ${employee.emp_company}`);
    }
}

console.warn("========= 2. Print on only Finance Dep. & Emp.Name ============= ");

for (const employee of all_emp) {

    if (employee.emp_dept === "Finance") {
        console.log(`1.Department = ${employee.emp_dept},  2.Employee Name = ${employee.emp_name}`);
    }
}

console.warn("========= 3. Print on R Start Name & Complete Details ============= ");

for (const employee of all_emp) {

    if (employee.emp_name.startsWith("R")) {
        console.log(employee);
    }
}

console.warn("========= 4. Print on Whose salary greater thar 70000/-  ============= ");

for (const employee of all_emp) {

    if (employee.emp_salary > 70000) {
        console.log(`1.Employee Name = ${employee.emp_name},  2.Employee Company = ${employee.emp_company},  3.Employee Salary =${employee.emp_salary}`);
    }
}

console.warn("========= 5. Print on Whose salary greater thar Equal 50000/-  ============= ");

for (const employee of all_emp) {

    if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {

        console.log(employee);
    }
}


console.warn("========= 6. Print on Emp. form Company Infy  ============= ");

for (const employee of all_emp) {

    if (employee.emp_company === "Infy") {
        console.log(employee);
    }
}