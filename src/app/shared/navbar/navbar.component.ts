import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  @Output() sidenavToogle = new EventEmitter<boolean>();

  constructor() { }

  openSidenav() {
    //this.sidenavToogle.emit(true);
  }

}
