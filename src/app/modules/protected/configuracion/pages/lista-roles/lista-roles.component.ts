import { Component, OnInit } from '@angular/core';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.scss']
})
export class ListaRolesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight','actions'];
  dataSource: any;
  constructor( private _rolS: RolService) { }

  ngOnInit(): void {
    this._rolS.getAllRoles().subscribe( x=> {
      this.dataSource=x;
    })
  }

}
