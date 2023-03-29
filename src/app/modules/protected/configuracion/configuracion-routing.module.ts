import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRolesComponent } from './pages/lista-roles/lista-roles.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { RolComponent } from './pages/rol/rol.component';


const routes: Routes = [ { path: 'usuarios', component: ListaUsuariosComponent },
                         { path: 'roles', component: ListaRolesComponent },
                         { path:'roles/:id', component: RolComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
