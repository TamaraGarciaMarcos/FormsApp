import { FormGroup, ValidationErrors, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  //expresiones regulares para validar un nombre y apellido:
  //public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  //expresion que lo valida con acentos
  public firstNameAndLastnamePattern: string = '([a-zA-ZáéíóúÁÉÍÓÚ]+) ([a-zA-ZáéíóúÁÉÍÓÚ]+)'
  //expresiones regulares para validar un email:
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  public cantBeStrider= ( control: FormControl ): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase()
    if ( value === 'strider'){
      return {
        noStrinder: true,
      }
    }
    return null;
  }

  public isValidField( form: FormGroup, field: string) {
     return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualFielTwo( field1: string, field2:string){

    return ( formGroup: FormGroup ): ValidationErrors | null => {

      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      if (field1Value !== field2Value){
        formGroup.get(field2)?.setErrors({ notEqual: true })
        return { notEqual: true}
      }
      //si son iguales:
      formGroup.get(field2)?.setErrors(null)
      return null;
    }

  }

}
