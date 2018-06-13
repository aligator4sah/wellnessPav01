import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav.component';
import {ShareModule} from '../../share/share.module';
import {MegaMenuModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MegaMenuModule,
  ],
  declarations: [LeftNavComponent],
  exports: [
    ShareModule,
    LeftNavComponent,
    MegaMenuModule,
  ]
})
export class LeftNavModule { }
