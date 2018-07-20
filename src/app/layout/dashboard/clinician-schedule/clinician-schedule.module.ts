import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicianScheduleComponent } from './clinician-schedule.component';
import {RouterModule} from '@angular/router';
import {ScheduleModule} from 'primeng/schedule';
import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    ButtonModule,
    GrowlModule,
    RouterModule.forChild([
      {path: '', component: ClinicianScheduleComponent}
    ])
  ],
  declarations: [ClinicianScheduleComponent],
  exports: [
    CommonModule,
    ScheduleModule,
    ButtonModule,
    GrowlModule,
    ClinicianScheduleComponent,
    RouterModule
  ]
})
export class ClinicianScheduleModule { }
