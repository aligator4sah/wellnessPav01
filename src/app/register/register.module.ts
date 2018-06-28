import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([
      {path: '', component: RegisterComponent}
    ])
  ],
  declarations: [RegisterComponent],
  exports: [
    CommonModule,
    RouterModule,
    CardModule,
    RegisterComponent
  ]
})
export class RegisterModule { }
