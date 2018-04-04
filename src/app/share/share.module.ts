import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AccordionModule, CalendarModule, DropdownModule, InputTextModule, OverlayPanelModule} from 'primeng/primeng';
import {AngularFontAwesomeComponent, AngularFontAwesomeModule} from 'angular-font-awesome';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    AccordionModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    OverlayPanelModule,
    AngularFontAwesomeModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    AccordionModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    OverlayPanelModule,
    AngularFontAwesomeModule
  ]
})
export class ShareModule { }
