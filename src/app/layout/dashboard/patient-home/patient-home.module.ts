import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home.component';
import {ShareModule} from '../../../share/share.module';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule, DropdownModule, InputTextareaModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    CardModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
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
    DialogModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    PatientHomeComponent,
    RouterModule,
  ]
})
export class PatientHomeModule { }
