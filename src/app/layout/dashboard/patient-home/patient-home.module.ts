import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home.component';
import {ShareModule} from '../../../share/share.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {path: '', component: PatientHomeComponent}
    ])
  ],
  declarations: [PatientHomeComponent],
  exports: [
    CommonModule,
    ShareModule,
    PatientHomeComponent,
    RouterModule,
  ]
})
export class PatientHomeModule { }
