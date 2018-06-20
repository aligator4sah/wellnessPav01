import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDemographicComponent } from './create-demographic.component';
import {ShareModule} from '../../../share/share.module';
import {Router, RouterModule} from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {
  CalendarModule, CheckboxModule, DropdownModule, InputTextareaModule, InputTextModule, MultiSelectModule, PanelMenuModule, RadioButton,
  RadioButtonModule
} from 'primeng/primeng';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';

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
    InputTextareaModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    RouterModule.forChild([
      {path: '', component: CreateDemographicComponent}
    ])
  ],
  declarations: [CreateDemographicComponent],
  exports: [
    ShareModule,
    RouterModule,
    PanelModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    MultiSelectModule,
    RadioButtonModule,
    InputTextareaModule,
    CreateDemographicComponent,
    MessagesModule,
    MessageModule,
  ]
})
export class CreateDemographicModule { }
