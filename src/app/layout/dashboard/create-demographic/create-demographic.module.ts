import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDemographicComponent } from './create-demographic.component';
import {ShareModule} from '../../../share/share.module';
import {Router, RouterModule} from '@angular/router';
import {
  CalendarModule, CheckboxModule, DropdownModule, InputTextModule, MultiSelectModule, PanelMenuModule, RadioButton,
  RadioButtonModule
} from 'primeng/primeng';
import {PanelModule} from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PanelModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    MultiSelectModule,
    RouterModule.forChild([
      {path: '', component: CreateDemographicComponent}
    ])
  ],
  declarations: [CreateDemographicComponent],
  exports: [
    ShareModule,
    RouterModule,
    PanelModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    MultiSelectModule,
    RadioButtonModule,
    CreateDemographicComponent
  ]
})
export class CreateDemographicModule { }
