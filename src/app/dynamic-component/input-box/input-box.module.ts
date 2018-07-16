import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box.component';
import {InputTextModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
  ],
  declarations: [InputBoxComponent],
  exports: [
    CommonModule,
    InputTextModule,
    InputBoxComponent,
  ]
})
export class InputBoxModule { }
