import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {LeftNavModule} from '../left-nav/left-nav.module';
import {HeadbarModule} from '../headbar/headbar.module';
import {dashboardRoutes} from './dashboard.route';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    LeftNavModule,
    HeadbarModule,
    RouterModule.forChild(dashboardRoutes)
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
