class Employee{
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    incrementSalary(amount: number){
        this.salary += amount;
    }

}
let emp1 = new Employee(23, "Ravi", 43433);
emp1.incrementSalary(5000)
console.log(emp1);
