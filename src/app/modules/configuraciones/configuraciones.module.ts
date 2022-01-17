import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionesRoutingModule } from './configuraciones-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RolesComponent } from './roles/roles.component';
import { AgendasComponent } from './agendas/agendas.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { PracticasComponent } from './practicas/practicas.component';


@NgModule({
  declarations: [UsuariosComponent, RolesComponent, AgendasComponent, ProfesionalesComponent, PracticasComponent],
  imports: [
    CommonModule,
    ConfiguracionesRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ConfiguracionesModule { }
