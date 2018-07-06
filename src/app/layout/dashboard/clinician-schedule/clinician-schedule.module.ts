import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicianScheduleComponent } from './clinician-schedule.component';
import {RouterModule} from '@angular/router';
import {ScheduleModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    ButtonModule,
    RouterModule.forChild([
      {path: '', component: ClinicianScheduleComponent}
    ])
  ],
  declarations: [ClinicianScheduleComponent],
  exports: [
    CommonModule,
    ScheduleModule,
    ButtonModule,
    ClinicianScheduleComponent,
    RouterModule
  ]
})
export class ClinicianScheduleModule { }
