import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterTableComponent } from './encounter-table.component';
import { RouterModule } from '@angular/router';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    PatientInfoModule,
    TableModule,
    ButtonModule,
    RouterModule.forChild([
      {path: '', component: EncounterTableComponent}
    ])
  ],
  declarations: [EncounterTableComponent],
  exports: [
    CommonModule,
    PatientInfoModule,
    RouterModule,
    TableModule,
    ButtonModule,
    EncounterTableComponent,
  ]
})
export class EncounterTableModule { }
