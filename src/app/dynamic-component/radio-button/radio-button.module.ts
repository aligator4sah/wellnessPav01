import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RadioButtonComponent],
  exports: [
    RadioButtonComponent,
  ]
})
export class RadioButtonModule { }
