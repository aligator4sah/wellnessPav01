import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Schedule} from 'primeng/primeng';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  items: MenuItem[];
  showSearch: boolean = false;

  user = JSON.parse(localStorage.getItem('curUser'));
  today = Date.now();

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: '/dashBoard/#',
        items: []
      },
      {
        label: 'Patient', icon: 'fa fa-fw fa-user',
        items: [
            {
              label: 'Demographic',
              routerLink: '/dashBoard/patient-demographic'
            },
            {
              label: 'Encounters',
              routerLink: '/dashBoard/create-encounter'
            },
            {
              label: 'Questionnaire',
              routerLink: ''
            },
            {
              label: 'Appointment',
              routerLink: '/dashBoard/create-p-appointment'
            },
            {
              label: 'Response'
            }
        ]
      },
      {
        label: 'Appointments', icon: 'fa fa-fw fa-calendar',
        items: [
            {
              label: 'Daily'
            },
            {
              label: 'Departments'
            },

        ]
      },
      {
        label: 'Analysis', icon: 'fa fa-fw fa-line-chart',
        items: [
            {
              label: 'General',
              routerLink: '',
            },
            {
              label: 'Individual'
            },
        ]
      }
    ];

    if (this.user.role.value === 'Clinician') {
      this.items.push({
        label: 'Schedule',
        icon: 'fa fa-fw fa-calendar-check-o',
        routerLink: '/dashBoard/clinician-schedule',
        items: [
          {
            label: 'Create'
          },
          {
            label: 'List',
            routerLink: '/dashBoard/clinician-schedule'
          }
        ]});
    } else if (this.user.role.value === 'Administrator') {
      this.items.splice(1, 2);
      this.items.push({
        label: 'Event',
        icon: 'fa fa-fw fa-handshake-o',
        items: []
      });
    }
  }

  showSearchBar() {
    this.showSearch = !this.showSearch;
  }

  closeSearch() {
    this.showSearch = false;
  }

}
