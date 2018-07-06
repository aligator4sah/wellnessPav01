import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterViewComponent } from './encounter-view.component';
import {RouterModule} from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import {PatientInfoModule} from '../patient-info/patient-info.module';

@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    PatientInfoModule,
    RouterModule.forChild([
      {path: '', component: EncounterViewComponent}
    ])
  ],
  declarations: [EncounterViewComponent],
  exports: [
    CommonModule,
    DataViewModule,
    PatientInfoModule,
    EncounterViewComponent,
    RouterModule
  ]
})
export class EncounterViewModule { }
