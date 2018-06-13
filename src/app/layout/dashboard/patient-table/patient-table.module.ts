import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientTableComponent } from './patient-table.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PatientTableComponent}
    ])
  ],
  declarations: [PatientTableComponent],
  exports: [
    PatientTableComponent,
    CommonModule,
    RouterModule,
  ]
})
export class PatientTableModule { }
