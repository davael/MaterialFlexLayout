import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolService } from '../../services/rol.service';
import { RolComponent } from '../rol/rol.component';
import { ActionTable } from 'src/app/shared/models/action-table';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.scss']
})
export class ListaRolesComponent implements OnInit {

  displayedColumns: any;
  actionsButtons: any;
  roles: any;

  constructor( private _rolS: RolService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._rolS.getAllRoles().subscribe( x=> {
      this.roles = x;
    })
    this.displayedColumns= this.getColumns();
    this.actionsButtons = this.getButtons();
  }

  getColumns():  any[] {
    return [
      { caption: 'Id', field: 'rolId', type: 'number' , isSortable: false},
      { caption: 'Descripción', field: 'rolDescripcion', type:'text' ,isSortable: false},
      { caption: 'Activo', field: 'rolActivo',type:'checkbox' , isSortable: false}
    ];
  };
  getButtons():  any[] {
    return [
      { title: 'Ver', icon: 'visibility', color: 'basic', action:'view'},
      { title: 'Modificar', icon: 'upgrade', color: 'primary', action:'update'},
      { title: 'Borrar', icon: 'delete', color: 'warn', action:'delete'},

    ];
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.roles.filter = filterValue.trim().toLowerCase();
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

  borrarRol(id:number){
    this._rolS.deleteRol(id).subscribe( x=> {
      this.ngOnInit();
    });
  }
  abreModal(data: ActionTable){
    if(data.action==='view'){
      this.openDialog(data.object,true);
    }
    if(data.action ==='update'){
      this.openDialog(data.object,false);
    }
    if(data.action ==='delete'){
      this.borrarRol(data.object.rolId);
    }
    if(data.action ==='add'){
      this.openDialog(null,false);
    }
  }
}
