import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-create-encounter',
  templateUrl: './create-encounter.component.html',
  styleUrls: ['./create-encounter.component.css']
})
export class CreateEncounterComponent implements OnInit {

  items: MenuItem[];

  activeIndex: number = 0;

  ngOnInit() {
    this.items = [
      {label: 'Confirm Patient'},
      {label: 'Input Encounter'},
      {label: 'Input SOAP Note'},
      {label: 'Confirmation'}
    ];
  }

  constructor() { }

  goPrevious() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = 3;
    }
  }

  goNext() {
    if (this.activeIndex < 3) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }

}
