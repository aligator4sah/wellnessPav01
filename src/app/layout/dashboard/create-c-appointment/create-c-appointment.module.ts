import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCAppointmentComponent } from './create-c-appointment.component';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../../../share/share.module';
import {CalendarModule, CheckboxModule, DropdownModule, InputTextModule, ScheduleModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/editor';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    EditorModule,
    ScheduleModule,
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
    DropdownModule,
    ScheduleModule,
    ShareModule,
    EditorModule,
    CreateCAppointmentComponent,
  ]
})
export class CreateCAppointmentModule { }
