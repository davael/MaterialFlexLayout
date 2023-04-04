import { MenuService } from './../../core/services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss'],
})
export class ProtectedComponent {
  /* fullSidenav$ = this.menuS.fullSidenav$ */
  constructor(private menuS: MenuService) {}

  onSinenavToggle() {
    this.menuS.fullOpen();
  }
  onSinenavToggleOut() {
    this.menuS.close();
  }
}
