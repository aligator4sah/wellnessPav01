import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDemographicComponent } from './create-demographic.component';
import {ShareModule} from '../../../share/share.module';
import {Router, RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {path: '', component: CreateDemographicComponent}
    ])
  ],
  declarations: [CreateDemographicComponent],
  exports: [
    ShareModule,
    RouterModule,
    CreateDemographicComponent
  ]
})
export class CreateDemographicModule { }
