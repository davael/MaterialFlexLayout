import { MenuService } from './../../core/services/menu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  fullSidenav$ = this.menuS.fullSidenav$;

  constructor(private menuS: MenuService) {}
}
