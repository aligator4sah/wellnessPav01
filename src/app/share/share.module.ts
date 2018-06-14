import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AccordionModule, CalendarModule, DropdownModule, InputTextModule, OverlayPanelModule} from 'primeng/primeng';
import {AngularFontAwesomeComponent, AngularFontAwesomeModule} from 'angular-font-awesome';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    OverlayPanelModule,
    AngularFontAwesomeModule
  ]
})
export class ShareModule { }
