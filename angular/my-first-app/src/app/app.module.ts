import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {BadgeComponent} from './badge.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EndLetterCapitalPipe } from './end-letter-capital.pipe';
import { SearchPipe } from './search.pipe';
import { DropdownComponent } from './dropdown/dropdown.component'
import { AppRoutingModule } from './app-routing.module';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, ViewEmployeesComponent, AddEmployeeComponent, EndLetterCapitalPipe, SearchPipe, DropdownComponent, UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
