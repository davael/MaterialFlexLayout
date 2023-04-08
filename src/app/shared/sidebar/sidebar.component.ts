import {IMenu} from 'src/app/core/interfaces/imenu';
import {MenuService} from './../../core/services/menu.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  fullSidenav$ = this.menuS.fullSidenav$;

  menu!: IMenu[];
  constructor(private menuS: MenuService) {
    this.menuS.getMenu().subscribe(x => {
      this.menu = x;
    });
  }
}
