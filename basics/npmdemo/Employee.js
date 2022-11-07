var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.incrementSalary = function (amount) {
        this.salary += amount;
    };
    return Employee;
}());
var emp1 = new Employee(23, "Ravi", 43433);
console.log(emp1);
