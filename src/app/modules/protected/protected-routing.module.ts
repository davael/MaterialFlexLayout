import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    children: [
      {
        path: 'module1',
        loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module),
      },
      {
        path: 'module2',
        loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module),
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
