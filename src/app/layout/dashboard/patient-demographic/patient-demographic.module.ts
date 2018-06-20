import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDemographicComponent } from './patient-demographic.component';
import {RouterModule} from '@angular/router';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    PatientInfoModule,
    ButtonModule,
    AccordionModule,
    RouterModule.forChild([
      {path: '', component: PatientDemographicComponent}
    ])
  ],
  declarations: [PatientDemographicComponent],
  exports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    AccordionModule,
    PatientInfoModule,
    PatientDemographicComponent
  ]
})
export class PatientDemographicModule { }
