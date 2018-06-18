import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientInfoComponent } from './patient-info.component';
import {FieldsetModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
  ],
  declarations: [PatientInfoComponent],
  exports: [
    FieldsetModule,
    CommonModule,
    PatientInfoComponent,
  ]
})
export class PatientInfoModule { }
