import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }
  today: Date = new Date();

  ngOnInit(): void {
    this.employeeService.fetchEmployees();
  }

}
