import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AgendasComponent } from './agendas/agendas.component';
import { PracticasComponent } from './practicas/practicas.component';

const routes: Routes = [
  {
    path:'usuarios',
    component: UsuariosComponent
  },
  {
    path:'roles',
    component: RolesComponent
  },
  {
    path:'agendas',
    component: AgendasComponent
  },
  {
    path:'profesionales',
    component: ProfesionalesComponent
  },
  {
    path:'practicas',
    component: PracticasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionesRoutingModule { }
