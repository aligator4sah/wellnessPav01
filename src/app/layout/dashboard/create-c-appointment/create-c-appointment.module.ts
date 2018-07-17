import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCAppointmentComponent } from './create-c-appointment.component';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {path: '', component: CreateCAppointmentComponent}
    ])
  ],
  declarations: [CreateCAppointmentComponent],
  exports: [
    CommonModule,
    RouterModule,
    ShareModule,
    CreateCAppointmentComponent,
  ]
})
export class CreateCAppointmentModule { }
