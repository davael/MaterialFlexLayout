import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  nameUser: string;
  activo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nameUser: 'Usuario Administrador', activo: 'si'},
  {nameUser: 'Medico', activo: 'si'},
  {nameUser: 'Admisionista', activo: 'si'},
  {nameUser: 'Farmacia', activo: 'si'},
  {nameUser: 'Facturacion', activo: 'si'},
];
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements AfterViewInit {
  displayedColumns: string[] = ['nameUser', 'activo'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }



}
