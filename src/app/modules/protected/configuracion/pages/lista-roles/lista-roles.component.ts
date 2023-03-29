import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RolService } from '../../services/rol.service';
import { RolComponent } from '../rol/rol.component';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.scss']
})
export class ListaRolesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight','actions'];
  dataSource: any;
  constructor( private _rolS: RolService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._rolS.getAllRoles().subscribe( x=> {
      this.dataSource = new MatTableDataSource(x);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(element: any, readOnly: boolean): void {
    const dialogRef = this.dialog.open(RolComponent, {
      width: '500px',
      data: {read: readOnly, data: element},
    });

    dialogRef.afterClosed().subscribe(result => {
       this.ngOnInit();
    });
  }

}
