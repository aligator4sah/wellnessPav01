import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav.component';
import {ShareModule} from '../../share/share.module';
import {MegaMenuModule, SplitButtonModule, ToolbarModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
  ],
  declarations: [LeftNavComponent],
  exports: [
    ShareModule,
    LeftNavComponent,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
  ]
})
export class LeftNavModule { }
