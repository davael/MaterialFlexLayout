import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private fullSidenav = new BehaviorSubject<Boolean| any>(false);
  fullSidenav$ = this.fullSidenav.asObservable();

  constructor() { }

  fullOpen() {
    this.fullSidenav.next(true);
  }
  close() {
    this.fullSidenav.next(false);
  }
}
