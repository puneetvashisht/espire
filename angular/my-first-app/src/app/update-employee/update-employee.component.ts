import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empname: string = ''
  empsalary: string = ''
  message: string = ''

  updateEmployee(name: string, salary: string) {
    console.log('updating employee... ', { name, salary })
    this.employeeService.updateEmployee(this.route.snapshot.paramMap.get('id'), salary);
    this.message = "Successfully updated employee!"
    console.log(this.employeeService.employees);

  }
  constructor(public employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log('Employee id ', employeeId);
    this.employeeService.fetchEmployee(employeeId)
      .subscribe((res: any) => {
        console.log(res)
        this.empname = res.name
        this.empsalary = res.salary
      })



  }

}
