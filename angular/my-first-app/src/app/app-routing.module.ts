import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
    {path: '', component : ViewEmployeesComponent},
    {path: 'add', component : AddEmployeeComponent},
    {path: 'update/:id', component : UpdateEmployeeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }