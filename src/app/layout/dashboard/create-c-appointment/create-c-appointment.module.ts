import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCAppointmentComponent } from './create-c-appointment.component';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../../../share/share.module';
import {CalendarModule, CheckboxModule, InputTextModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    RouterModule.forChild([
      {path: '', component: CreateCAppointmentComponent}
    ])
  ],
  declarations: [CreateCAppointmentComponent],
  exports: [
    CommonModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    RouterModule,
    ShareModule,
    CreateCAppointmentComponent,
  ]
})
export class CreateCAppointmentModule { }
