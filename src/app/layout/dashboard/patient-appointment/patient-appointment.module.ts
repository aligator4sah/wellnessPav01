import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import { PatientAppointmentComponent } from './patient-appointment.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PatientInfoModule,
    TableModule,
    RouterModule.forChild([
      {path: '', component: PatientAppointmentComponent}
    ])
  ],
  declarations: [PatientAppointmentComponent],
  exports: [
    CommonModule,
    PatientInfoModule,
    TableModule,
    PatientAppointmentComponent,
    RouterModule,

  ]
})
export class PatientAppointmentModule { }
