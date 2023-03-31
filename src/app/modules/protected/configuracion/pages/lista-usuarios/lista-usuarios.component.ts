import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['position', 'name','email','rol' , 'weight','actions'];
  constructor(private _userS: UsuariosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._userS.getAllUsers().subscribe( x => {
      this.dataSource = new MatTableDataSource(x);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

}
