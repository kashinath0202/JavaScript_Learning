console.warn("Assignment-3 -- ========= Map() ==========  --(Page No- 34)");


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

console.warn("1. Print on All employee Name");

 all_emp.forEach((employee)=>{

   console.log(employee.emp_name); 
   
});

console.warn("2. Print on All Department");

all_emp.forEach((department,)=>{
    console.table(department.emp_dept);
});

console.warn("3. Print on All employee ID");

all_emp.forEach((id)=>{

    console.log(id.emp_id);
});