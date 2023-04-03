import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolService } from '../../services/rol.service';
import { RolComponent } from '../rol/rol.component';
import { ActionTable } from 'src/app/shared/models/action-table';
import { ActionButtonColumn } from 'src/app/shared/models/action-button-column';
import { TableColumn } from 'src/app/shared/models/table-column';
import { RolGet } from '../../interfaces/rol-get';
import { TableParameter } from 'src/app/shared/models/table-parameter';
import { TablePagination } from 'src/app/shared/models/table-pagination';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.scss']
})
export class ListaRolesComponent implements OnInit {

  tableParameters!: TableParameter;
  roles!: RolGet[];

  constructor( private _rolS: RolService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRoles();
    let tablePagination= new TablePagination(true,[2,4,6],4);
    this.tableParameters= new TableParameter(this.getColumns(),this.getActionsButtons(),true,tablePagination,true);
  }

  openDialog(element: any, readOnly: boolean): void {
    const dialogRef = this.dialog.open(RolComponent, {
      width: '500px',
      data: {read: readOnly, data: element},
    });

    dialogRef.afterClosed().subscribe(result => {
       this.getRoles();
    });
  }

  borrarRol(id:number){
    this._rolS.deleteRol(id).subscribe( x=> {
      this.getRoles();
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

  private getRoles(){
    this._rolS.getAllRoles().subscribe( x=> {
      this.roles = x;
    })
  }
  private getActionsButtons():  ActionButtonColumn[] {
    return [
      new ActionButtonColumn('Ver','visibility','basic','view'),
      new ActionButtonColumn('Modificar','upgrade','primary','update'),
      new ActionButtonColumn('Borrar','delete','warn','delete'),
    ];
  };
  private getColumns(): TableColumn[]{
    return [
      new TableColumn('Id','rolId','number',false),
      new TableColumn('Descripción','rolDescripcion','text',false),
      new TableColumn('Activo','rolActivo','checkbox',false),
    ];
  };
}
