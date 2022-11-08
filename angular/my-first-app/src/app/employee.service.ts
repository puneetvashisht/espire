import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './view-employees/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  employees: Array<Employee> = [];

  fetchEmployees(){
    this.http.get('http://localhost:8000/employees')
    .subscribe((res:any) => {
      console.log(res)
      this.employees = res;
    })
  }

  fetchEmployee(id: string | null){
    return this.http.get('http://localhost:8000/employees/' + id)
    
  }

  addEmployee(employee: Employee){
    this.employees.push(employee);
    this.http.post('http://localhost:8000/employees', employee)
    .subscribe(res=> console.log(res))
  }

 
}
