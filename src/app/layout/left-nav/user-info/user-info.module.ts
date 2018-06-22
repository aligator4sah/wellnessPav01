import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserInfoComponent],
  exports: [
    CommonModule,
    UserInfoComponent,
  ]
})
export class UserInfoModule { }
