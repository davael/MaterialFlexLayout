import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-recursive',
  templateUrl: './menu-recursive.component.html',
  styleUrls: ['./menu-recursive.component.scss']
})
export class MenuRecursiveComponent implements OnInit {
  @Input() items!: any[];
  @ViewChild('buildMenu', {static: true}) public buildMenu: any;
  constructor() { }

  ngOnInit(): void {
  }

}
