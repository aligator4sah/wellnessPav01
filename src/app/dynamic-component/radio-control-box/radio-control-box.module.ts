import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioControlBoxComponent } from './radio-control-box.component';
import {RadioButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    RadioButtonModule,
  ],
  declarations: [RadioControlBoxComponent],
  exports: [
    CommonModule,
    RadioButtonModule,
    RadioControlBoxComponent
  ]
})
export class RadioControlBoxModule { }
