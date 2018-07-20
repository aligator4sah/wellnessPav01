import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoapListComponent } from './soap-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SoapListComponent}
    ])
  ],
  declarations: [SoapListComponent],
  exports: [
    CommonModule,
    SoapListComponent,
    RouterModule
  ]
})
export class SoapListModule { }
