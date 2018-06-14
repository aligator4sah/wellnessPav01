import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientTableComponent } from './patient-table.component';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import {ShareModule} from '../../../share/share.module';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ShareModule,
    TableModule,
    MultiSelectModule,
    RouterModule.forChild([
      {path: '', component: PatientTableComponent}
    ])
  ],
  declarations: [PatientTableComponent],
  exports: [
    PatientTableComponent,
    ShareModule,
    CommonModule,
    TableModule,
    MultiSelectModule,
    CardModule,
    RouterModule,
  ]
})
export class PatientTableModule { }
