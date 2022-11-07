import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../view-employees/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {



  addEmployee(name: string, salary: string){
    console.log('Adding employee... ', {name, salary})
    this.employeeService.addEmployee({ name, salary: parseInt(salary)});
    console.log(this.employeeService.employees);
    
  }
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

}
