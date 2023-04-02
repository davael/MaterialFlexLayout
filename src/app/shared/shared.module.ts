import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    TableComponent
  ]
})
export class SharedModule { }
