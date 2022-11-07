class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    incrementSalary(amount) {
        this.salary += amount;
    }
}
let emp1 = new Employee(23, "Ravi", 43433);
emp1.incrementSalary(5000);
console.log(emp1);
