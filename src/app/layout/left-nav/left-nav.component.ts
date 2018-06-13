import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Patient', icon: 'fa fa-fw fa-user',
        items: [
          [
            {
              label: 'Demographic',
            },
            {
              label: 'Encounters'
            },
            {
              label: 'Questionnaire'
            },
            {
              label: 'Response'
            }
          ]
        ]
      },
      {
        label: 'Appointments', icon: 'fa fa-fw fa-calendar',
        items: [
          [
            {
              label: 'Daily'
            },
            {
              label: 'Departments'
            },

          ]
        ]
      },
      {
        label: 'Analysis', icon: 'fa fa-fw fa-line-chart', routerLink: '',
        items: [
          [
            {
              label: 'General',
              routerLink: '',
            },
            {
              label: 'Individual'
            },

          ]
        ]
      }
    ];
  }

}
