import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {MaterialModule} from '../core/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {TableComponent} from './table/table.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {MenuRecursiveComponent} from './menu-recursive/menu-recursive.component';
import {ComboboxComponent} from './components/combobox/combobox.component';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    ConfirmDialogComponent,
    MenuRecursiveComponent,
    ComboboxComponent,
    DynamicFormComponent,
  ],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule, ReactiveFormsModule],
  exports: [NavbarComponent, SidebarComponent, TableComponent, DynamicFormComponent],
})
export class SharedModule {}
