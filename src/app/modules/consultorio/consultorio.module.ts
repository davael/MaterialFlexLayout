import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultorioRoutingModule } from './consultorio-routing.module';
import { ConsultorioComponent } from './consultorio/consultorio.component';


@NgModule({
  declarations: [ConsultorioComponent],
  imports: [
    CommonModule,
    ConsultorioRoutingModule
  ]
})
export class ConsultorioModule { }
