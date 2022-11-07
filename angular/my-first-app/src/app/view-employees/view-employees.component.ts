import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: Array<Employee> = [
    {id: 2, name: 'Priya', salary: 34343},
    {id: 34, name: 'Rahul', salary: 43433}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
