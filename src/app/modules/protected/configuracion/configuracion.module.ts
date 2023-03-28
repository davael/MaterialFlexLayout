import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/core/material/material.module';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { ListaRolesComponent } from './pages/lista-roles/lista-roles.component';




@NgModule({
  declarations: [
    ListaUsuariosComponent,
    ListaRolesComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    MaterialModule
  ]
})
export class ConfiguracionModule { }
