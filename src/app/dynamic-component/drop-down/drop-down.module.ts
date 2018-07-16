import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down.component';
import {DropdownModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
  ],
  declarations: [DropDownComponent],
  exports: [
    DropdownModule,
    DropDownComponent,
  ]
})
export class DropDownModule { }
