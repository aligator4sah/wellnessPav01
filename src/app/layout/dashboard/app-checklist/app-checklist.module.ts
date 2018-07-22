import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChecklistComponent } from './app-checklist.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AppChecklistComponent}
    ])
  ],
  declarations: [AppChecklistComponent],
  exports: [
    CommonModule,
    RouterModule,
    AppChecklistComponent,
  ]
})
export class AppChecklistModule { }
