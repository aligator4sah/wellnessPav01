import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav.component';
import {ShareModule} from '../../share/share.module';
import {MegaMenuModule, SplitButtonModule, ToolbarModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
    PanelMenuModule
  ],
  declarations: [LeftNavComponent],
  exports: [
    ShareModule,
    LeftNavComponent,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
    PanelMenuModule
  ]
})
export class LeftNavModule { }
