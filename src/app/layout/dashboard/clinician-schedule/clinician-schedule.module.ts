import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicianScheduleComponent } from './clinician-schedule.component';
import {RouterModule} from '@angular/router';
import {ScheduleModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    RouterModule.forChild([
      {path: '', component: ClinicianScheduleComponent}
    ])
  ],
  declarations: [ClinicianScheduleComponent],
  exports: [
    CommonModule,
    ScheduleModule,
    ClinicianScheduleComponent,
    RouterModule
  ]
})
export class ClinicianScheduleModule { }
