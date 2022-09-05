import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Iloginrequest } from 'src/app/core/interfaces/iloginrequest';
import { catchError, ignoreElements, tap } from 'rxjs/operators';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<IUser| any>(null);
  user$ = this.user.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) { }


  login(credentials: Iloginrequest) {
    console.log('ingresa');
    return this.httpClient
      .post(``,credentials)
      .pipe(
        tap(token => {
          this.handleSuccesfulLogin(token);
        }),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        })
      );
  }

  private handleSuccesfulLogin(token: any): void {
    this.user.next(token.user)
    //this._authToken = token;
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(['/']);
  }

}
