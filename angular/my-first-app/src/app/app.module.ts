import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BadgeComponent} from './badge.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component'

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, ViewEmployeesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
