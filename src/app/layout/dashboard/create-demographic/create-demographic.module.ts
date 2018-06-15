import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDemographicComponent } from './create-demographic.component';
import {ShareModule} from '../../../share/share.module';
import {Router, RouterModule} from '@angular/router';
import {CalendarModule, DropdownModule, InputTextModule, PanelMenuModule, RadioButton, RadioButtonModule} from 'primeng/primeng';
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
    RadioButtonModule,
    CreateDemographicComponent
  ]
})
export class CreateDemographicModule { }
