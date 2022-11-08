import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './view-employees/employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Array<Employee>, ...args: string[]): Array<Employee> {
    return employees.filter((emp) => emp.name.startsWith(args[0]));
  }

}
