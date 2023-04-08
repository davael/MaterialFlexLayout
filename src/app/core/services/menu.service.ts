import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {environment} from 'src/environments/environment.prod';
import {IMenu} from '../interfaces/imenu';
const url = environment.APIUrl;
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private fullSidenav = new BehaviorSubject<boolean>(false);
  fullSidenav$ = this.fullSidenav.asObservable();

  constructor(private http: HttpClient) {}

  fullOpen() {
    this.fullSidenav.next(true);
  }
  close() {
    this.fullSidenav.next(false);
  }

  getMenu() {
    return this.http.get<IMenu[]>(url + 'Menus');
  }
}
