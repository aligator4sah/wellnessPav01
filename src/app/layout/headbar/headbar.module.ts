import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadbarComponent } from './headbar.component';
import {ShareModule} from '../../share/share.module';
import {MenuItem} from 'primeng/api';


@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [HeadbarComponent],
  exports: [
    ShareModule,
    HeadbarComponent
  ]
})
export class HeadbarModule { }
