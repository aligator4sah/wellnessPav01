import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {LeftNavModule} from '../left-nav/left-nav.module';
import {HeadbarModule} from '../headbar/headbar.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    LeftNavModule,
    HeadbarModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent],
  exports: [
    LeftNavModule,
    HeadbarModule,
    ShareModule,
    RouterModule,
    DashboardComponent
  ]
})
export class DashboardModule { }
