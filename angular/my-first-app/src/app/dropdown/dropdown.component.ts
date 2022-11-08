import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  show: boolean = false;

  toggleShow(){
    this.show = !this.show;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
