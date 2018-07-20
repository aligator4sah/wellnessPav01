import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoapListComponent } from './soap-list.component';
import {RouterModule} from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {InputTextModule, ScrollPanelModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {DropDownModule} from '../../../dynamic-component/drop-down/drop-down.module';

@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    ButtonModule,
    DropDownModule,
    InputTextModule,
    PatientInfoModule,
    ScrollPanelModule,
    RouterModule.forChild([
      {path: '', component: SoapListComponent}
    ])
  ],
  declarations: [SoapListComponent],
  exports: [
    CommonModule,
    DataViewModule,
    PatientInfoModule,
    DropDownModule,
    InputTextModule,
    ButtonModule,
    SoapListComponent,
    ScrollPanelModule,
    RouterModule
  ]
})
export class SoapListModule { }
