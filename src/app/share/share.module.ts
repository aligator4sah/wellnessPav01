import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule, CalendarModule, DropdownModule, InputTextModule, OverlayPanelModule} from 'primeng/primeng';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputBoxModule} from '../dynamic-component/input-box/input-box.module';
import {DropDownModule} from '../dynamic-component/drop-down/drop-down.module';
import {RadioControlBoxModule} from '../dynamic-component/radio-control-box/radio-control-box.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    OverlayPanelModule,
    MenuModule,
    RadioControlBoxModule,
    InputBoxModule,
    DropDownModule,
    AngularFontAwesomeModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    MenuModule,
    InputBoxModule,
    OverlayPanelModule,
    RadioControlBoxModule,
    DropDownModule,
    AngularFontAwesomeModule
  ]
})
export class ShareModule { }
