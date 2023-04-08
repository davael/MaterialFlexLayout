import {Component, Input, ViewChild} from '@angular/core';
import {IMenu} from 'src/app/core/interfaces/imenu';

@Component({
  selector: 'app-menu-recursive',
  templateUrl: './menu-recursive.component.html',
  styleUrls: ['./menu-recursive.component.scss'],
})
export class MenuRecursiveComponent {
  @Input() items!: IMenu[];
  @ViewChild('buildMenu', {static: true}) public buildMenu: any;
  constructor() {}
}
