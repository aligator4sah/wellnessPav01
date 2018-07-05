import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePAppointmentComponent } from './create-p-appointment.component';
import {RouterModule} from '@angular/router';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {CalendarModule} from 'primeng/primeng';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PatientInfoModule,
    CalendarModule,
    RouterModule.forChild([
      {path: '', component: CreatePAppointmentComponent}
    ])
  ],
  declarations: [CreatePAppointmentComponent],
  exports: [
    CommonModule,
    ShareModule,
    CalendarModule,
    PatientInfoModule,
    CreatePAppointmentComponent,
    RouterModule
  ]
})
export class CreatePAppointmentModule { }
