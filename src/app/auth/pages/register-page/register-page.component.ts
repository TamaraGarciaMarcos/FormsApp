import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: []
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern) ]],
    username: ['', [Validators.required, customValidators.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder){}

  isValidField( field: string){
    //TODO: obtener validacion desde un servicio

  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
