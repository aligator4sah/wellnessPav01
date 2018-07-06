import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterViewComponent } from './encounter-view.component';
import {RouterModule} from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {DropdownModule} from 'primeng/primeng';
import {ShareModule} from '../../../share/share.module';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    DropdownModule,
    DataViewModule,
    PatientInfoModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    RouterModule.forChild([
      {path: '', component: EncounterViewComponent}
    ])
  ],
  declarations: [EncounterViewComponent],
  exports: [
    CommonModule,
    ShareModule,
    DropdownModule,
    PanelModule,
    DataViewModule,
    ButtonModule,
    PatientInfoModule,
    DialogModule,
    EncounterViewComponent,
    RouterModule
  ]
})
export class EncounterViewModule { }
