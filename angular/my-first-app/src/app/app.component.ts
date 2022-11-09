import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = ''
  courses: Array<string> = ["React", "Angular", "NodeJS", "Java"]

  handleEvent(title: string) {
    console.log('In a parent component method... ', title);
    this.title = title;
  }
}
