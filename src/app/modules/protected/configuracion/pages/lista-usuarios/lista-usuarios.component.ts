import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UsuariosService} from '../../services/usuarios.service';
import {UsuarioComponent} from '../usuario/usuario.component';
import {TableParameter} from 'src/app/shared/models/table-parameter';
import {ConfirmDialogService} from 'src/app/shared/services/confirm-dialog.service';
import {TablePagination} from 'src/app/shared/models/table-pagination';
import {TableColumn} from 'src/app/shared/models/table-column';
import {ActionButtonColumn} from 'src/app/shared/models/action-button-column';
import {ActionTable} from 'src/app/shared/models/action-table';
import {IUserGet} from '../../interfaces/user-get';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent implements OnInit {
  usuarios!: IUserGet[];
  tableParameters!: TableParameter;

  constructor(private _userS: UsuariosService, public dialog: MatDialog, private dialogService: ConfirmDialogService) {}

  ngOnInit(): void {
    this.getUsuarios();
    const tablePagination = new TablePagination(true, [2, 5, 10], 5);
    this.tableParameters = new TableParameter(this.getColumns(), this.getActionsButtons(), true, tablePagination, true);
  }

  openDialog(element: any, readOnly: string): void {
    const dialogRef = this.dialog.open(UsuarioComponent, {
      width: '500px',
      data: {mode: readOnly, data: element},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  abreModal(data: ActionTable) {
    this.openDialog(data.object, data.action);
  }

  private getUsuarios() {
    this._userS.getAllUsers().subscribe(x => {
      this.usuarios = x;
    });
  }

  private getActionsButtons(): ActionButtonColumn[] {
    return [
      new ActionButtonColumn('Ver', 'visibility', 'basic', 'view'),
      new ActionButtonColumn('Modificar', 'upgrade', 'primary', 'update'),
    ];
  }

  private getColumns(): TableColumn[] {
    return [
      new TableColumn('Id', 'userId', 'number', false),
      new TableColumn('Usuario', 'userName', 'text', false),
      new TableColumn('Email', 'userEmail', 'text', false),
      new TableColumn('Activo', 'userActivo', 'checkbox', false),
      new TableColumn('Rol', 'userRolNavigation.rolDescripcion', 'text', false),
    ];
  }
}
