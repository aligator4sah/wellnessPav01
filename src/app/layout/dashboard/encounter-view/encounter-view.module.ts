import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterViewComponent } from './encounter-view.component';
import {RouterModule} from '@angular/router';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    RouterModule.forChild([
      {path: '', component: EncounterViewComponent}
    ])
  ],
  declarations: [EncounterViewComponent],
  exports: [
    CommonModule,
    DataViewModule,
    EncounterViewComponent,
    RouterModule
  ]
})
export class EncounterViewModule { }
