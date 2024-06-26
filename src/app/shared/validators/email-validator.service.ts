import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator{

  // validate(control: AbstractControl): Observable< ValidationErrors | null > {

  //   const email = control.value;
  //   console.log({email})

  //   return of ({
  //     emailTaken: true,
  //   }).pipe(
  //     delay(1000)
  //   )

  // }

  validate(control: AbstractControl): Observable< ValidationErrors | null > {

    const email = control.value;
    console.log({email})

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {
      console.log({email});
      if(email === 'fernando@gmail.com'){
        subscriber.next({ emailTaken: true });
        subscriber.complete();
        //return
      }
      subscriber.next(null);
      subscriber.complete();
    } ).pipe( delay(1000))

    return httpCallObservable;

  }

}

//si fuera una peticion http a un backend:
    // return this.http.get<any[]>(`http://localhost:3000users?q=${email}`)
    //   .pipe(
    //     map(
    //       resp=> {
    //         return(resp.length === 0 )
    //           ? null
    //           : {emailTaken:true}
    //       }
    //     )
    //   )
