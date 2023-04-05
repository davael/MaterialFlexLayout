import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private fullSidenav = new BehaviorSubject<boolean | any>(false);
  fullSidenav$ = this.fullSidenav.asObservable();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  fullOpen() {
    this.fullSidenav.next(true);
  }
  close() {
    this.fullSidenav.next(false);
  }
}
