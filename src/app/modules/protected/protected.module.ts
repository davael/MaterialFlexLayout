import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../core/material/material.module';


@NgModule({
  declarations: [
    ProtectedComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProtectedModule { }
