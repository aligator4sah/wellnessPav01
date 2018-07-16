import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckControlBoxComponent } from './check-control-box.component';
import {CheckboxModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
  ],
  declarations: [CheckControlBoxComponent],
  exports: [
    CommonModule,
    CheckboxModule,
    CheckControlBoxComponent
  ]
})
export class CheckControlBoxModule { }
