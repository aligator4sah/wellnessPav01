import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import {DropdownModule, InputMaskModule, InputTextModule, PasswordModule, ScrollPanelModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ScrollPanelModule,
    PasswordModule,
    InputMaskModule,
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
    InputMaskModule,
    ShareModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    ScrollPanelModule,
    RegisterComponent
  ]
})
export class RegisterModule { }
