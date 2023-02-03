import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/iuser';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 /*  user$ = this.authService.user$; */

  @Output() sidenavToogle = new EventEmitter<boolean>();

  constructor(/* private authService: AuthService */) { }

  ngOnInit(): void {
  }

  openSidenav() {
    this.sidenavToogle.emit(true);
  }

}
