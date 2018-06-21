import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEncounterComponent } from './create-encounter.component';
import {RouterModule} from '@angular/router';
import {PatientInfoModule} from '../patient-info/patient-info.module';
import {StepsModule} from 'primeng/steps';
import {ButtonModule} from 'primeng/button';
import {
  CheckboxModule, DropdownModule, InputSwitchModule, InputTextareaModule, InputTextModule, KeyFilterModule, SplitButtonModule,
  ToggleButtonModule
} from 'primeng/primeng';
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
    InputTextareaModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    InputSwitchModule,
    KeyFilterModule,
    DropdownModule,
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
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    KeyFilterModule,
    InputSwitchModule,
    SplitButtonModule,
    DropdownModule,
    CreateEncounterComponent
  ]
})
export class CreateEncounterModule { }
