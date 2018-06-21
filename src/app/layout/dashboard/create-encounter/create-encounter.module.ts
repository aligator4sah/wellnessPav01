import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEncounterComponent } from './create-encounter.component';
import {RouterModule} from '@angular/router';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {StepsModule} from 'primeng/steps';
import {ButtonModule} from 'primeng/button';
import {InputTextModule, SplitButtonModule, ToggleButtonModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    PatientInfoModule,
    InputTextModule,
    StepsModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    FormsModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: CreateEncounterComponent}
    ])
  ],
  declarations: [CreateEncounterComponent],
  exports: [
    RouterModule,
    PatientInfoModule,
    StepsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    SplitButtonModule,
    CreateEncounterComponent
  ]
})
export class CreateEncounterModule { }
