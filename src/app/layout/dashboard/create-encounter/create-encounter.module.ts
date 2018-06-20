import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEncounterComponent } from './create-encounter.component';
import {RouterModule} from '@angular/router';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {StepsModule} from 'primeng/steps';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PatientInfoModule,
    StepsModule,
    ButtonModule,
    SplitButtonModule,
    RouterModule.forChild([
      {path: '', component: CreateEncounterComponent}
    ])
  ],
  declarations: [CreateEncounterComponent],
  exports: [
    RouterModule,
    PatientInfoModule,
    StepsModule,
    ButtonModule,
    SplitButtonModule,
    CreateEncounterComponent
  ]
})
export class CreateEncounterModule { }
