import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePAppointmentComponent } from './create-p-appointment.component';
import {RouterModule} from '@angular/router';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {CalendarModule, InputTextareaModule, RadioButtonModule} from 'primeng/primeng';
import {ShareModule} from '../../../share/share.module';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PatientInfoModule,
    CalendarModule,
    InputTextareaModule,
    ButtonModule,
    RadioButtonModule,
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
    InputTextareaModule,
    ButtonModule,
    RadioButtonModule,
    CreatePAppointmentComponent,
    RouterModule
  ]
})
export class CreatePAppointmentModule { }
