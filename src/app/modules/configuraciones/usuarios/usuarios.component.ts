import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  nameUser: string;
  fdesde: string;
  fhasta: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nameUser: 'dcisneros', fdesde: '01/03/2015', fhasta: ''},
  {nameUser: 'lquichan', fdesde: '15/06/2011', fhasta: ''},
  {nameUser: 'jflopez', fdesde: '26/01/2013', fhasta: '01/01/2020'},
  {nameUser: 'agonzalez', fdesde: '02/02/2017', fhasta: ''},
  {nameUser: 'pbaron', fdesde: '13/08/2010', fhasta: '02/04/2013'},
  {nameUser: 'mcarrizo', fdesde: '30/11/2020', fhasta: ''},
  {nameUser: 'tgomez', fdesde: '20/07/2021', fhasta: ''},
  {nameUser: 'ooviedo', fdesde: '19/12/2014', fhasta: ''},
  {nameUser: 'alucero', fdesde: '07/08/2016', fhasta: '25/04/2019'},
  {nameUser: 'rtuzzi', fdesde: '03/02/2019', fhasta: ''},
];
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements AfterViewInit {

  displayedColumns: string[] = ['nameUser', 'fdesde', 'fhasta'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
