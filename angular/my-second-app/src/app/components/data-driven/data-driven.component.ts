import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ValidationErrors, FormBuilder, Validators} from '@angular/forms'
import {Observable} from 'rxjs'
@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class DataDrivenComponent implements OnInit {

  myForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username' : ['', [Validators.required, this.sampleValidator], this.asyncExampleValidator],
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      })
    })
   }

   onSubmit(){
    console.log(this.myForm);
    
   }

   sampleValidator(control: FormControl): ValidationErrors | null {
    if(control.value == 'test'){
      return {invalidText: true}
    }
    return null;
  }


  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value == 'example'){
          resolve({invalidText: true})
        }
        else{
          resolve(null);
        }
      }, 5000)
    })
    return promise;
  }
  ngOnInit(): void {
  }

}
