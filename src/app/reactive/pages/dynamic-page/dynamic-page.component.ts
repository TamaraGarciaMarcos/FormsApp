import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: []
})
export class DynamicPageComponent {

  public myForm : FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    favoritesGames: this.fb.array([
      ['Stardew Valley', Validators.required],
      ['The legend of Zelda', Validators.required],
      ['Pokémon', Validators.required]
    ])
  })

  constructor(private fb: FormBuilder){}

  get favoritesGames(){
    return this.myForm.get('favoritesGames') as FormArray;
  }

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, index: number){
    return formArray.controls[index].errors
        && formArray.controls[index].touched;
  }

  getFieldError(field: string): string | null{

    if ( !this.myForm.controls[field] ) return null;

    const errors= this.myForm.controls[field].errors || {};
    for(const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`
      }
    }
    return null;
  }

  onDeleteFAvorite( index: number):void{
    this.favoritesGames.removeAt(index)
  }

  onSubmit():void{
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
