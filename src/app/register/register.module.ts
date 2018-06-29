import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import {DropdownModule, InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    RouterModule.forChild([
      {path: '', component: RegisterComponent}
    ])
  ],
  declarations: [RegisterComponent],
  exports: [
    CommonModule,
    RouterModule,
    CardModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    RegisterComponent
  ]
})
export class RegisterModule { }
