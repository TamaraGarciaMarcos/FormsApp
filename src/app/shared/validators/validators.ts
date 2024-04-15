import { FormControl, ValidationErrors } from "@angular/forms";

//expresiones regulares para validar un nombre y apellido:
//export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
//expresion que lo valida con acentos
export const firstNameAndLastnamePattern: string = '([a-zA-ZáéíóúÁÉÍÓÚ]+) ([a-zA-ZáéíóúÁÉÍÓÚ]+)'
//expresiones regulares para validar un email:
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";




//Archivo para centralizar todas las va

export const cantBeStrider= ( control: FormControl ): ValidationErrors | null => {

  const value: string = control.value.trim().toLowerCase()
  if ( value === 'strider'){
    return {
      noStrinder: true,
    }
  }
  return null;

}
