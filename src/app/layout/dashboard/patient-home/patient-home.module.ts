import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home.component';
import {ShareModule} from '../../../share/share.module';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import {PatientInfoModule} from '../patient-info/patient-info.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    CardModule,
    PatientInfoModule,
    RouterModule.forChild([
      {path: '', component: PatientHomeComponent}
    ])
  ],
  declarations: [PatientHomeComponent],
  exports: [
    CommonModule,
    ShareModule,
    PatientInfoModule,
    CardModule,
    PatientHomeComponent,
    RouterModule,
  ]
})
export class PatientHomeModule { }
