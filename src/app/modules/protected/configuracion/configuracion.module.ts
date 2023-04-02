import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/core/material/material.module';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { ListaRolesComponent } from './pages/lista-roles/lista-roles.component';
import { RolComponent } from './pages/rol/rol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    ListaUsuariosComponent,
    ListaRolesComponent,
    RolComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class ConfiguracionModule { }
