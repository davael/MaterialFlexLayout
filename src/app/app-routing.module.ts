import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'configuracion',
    loadChildren: () => import('./modules/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule)
  },
  {
    path:'consultorio',
    loadChildren: () => import('./modules/consultorio/consultorio.module').then(m => m.ConsultorioModule)
  },
  {
    path:'pacientes',
    loadChildren: () => import('./modules/pacientes/pacientes.module').then(m => m.PacientesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
