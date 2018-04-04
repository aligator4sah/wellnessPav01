import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav.component';
import {ShareModule} from '../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [LeftNavComponent],
  exports: [
    ShareModule,
    LeftNavComponent
  ]
})
export class LeftNavModule { }
