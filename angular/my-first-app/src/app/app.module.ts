import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {BadgeComponent} from './badge.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EndLetterCapitalPipe } from './end-letter-capital.pipe';
import { SearchPipe } from './search.pipe'

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, ViewEmployeesComponent, AddEmployeeComponent, EndLetterCapitalPipe, SearchPipe
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
