import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sidenavToogle = new EventEmitter<boolean>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  openSidenav() {
    //this.sidenavToogle.emit(true);
  }
}
