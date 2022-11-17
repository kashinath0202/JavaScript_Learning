console.warn("Assignment-3 -- ========= Reduce() & Filter() ==========  --(Page No- 40)");

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
const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, 'Vinayak', "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const all_emp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.warn("1. find the employee  for wipro company");

all_emp.filter((company)=>{

    if(company.emp_company=="Wipro")
     console.log(` Employee Name For Wipro Company - ${company.emp_name}`);

});

console.warn("2. find the employee  for department It & HR");

all_emp.filter((department)=>{
    if(department.emp_dept=="IT" || department.emp_dept=="HR"){

     console.log(`The employee depat. IT & HR = ${department.emp_name}`);

    }
});

console.warn("3. find the employee ID this id is grater than 50");

all_emp.filter((id)=>{
    
    if(id.emp_id>50){

        console.log(`Employee id is grater than 50 = ${id.emp_id}`);
    }
});


console.warn("4. find the employee ID this id is grater than 50");

all_emp.filter((names)=>{

    if (names.emp_name.startsWith("A") || names.emp_name.startsWith("V") || names.emp_name.startsWith("M")) {
        
        console.log(`The Employee Name Starts form A & V & M letter = ${names.emp_name}`);
    }
});

console.warn("5. find the employee salary avarage");
count = 0;
let avarage =  all_emp.filter((salary)=>{

   return count = count + salary.emp_salary 

});
     console.log(count/all_emp.length);



 console.warn("6. find the avarage salary IT department ");

 totalSalary =0;
let total = all_emp.filter((salaryIt)=>{

    if (salaryIt.emp_dept=="IT") {
 
       return totalSalary= totalSalary + salaryIt.emp_salary;
    }
 });
console.log(totalSalary);

