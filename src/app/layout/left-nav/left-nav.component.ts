import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  items: MenuItem[];
  showSearch: boolean = false;
  today = Date.now();

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: '/dashBoard',
        items: []
      },
      {
        label: 'Patient', icon: 'fa fa-fw fa-user',
        items: [
            {
              label: 'Demographic',
              url: 'http://www.primefaces.org/primeng'
            },
            {
              label: 'Encounters',
              routerLink: '/dashBoard'
            },
            {
              label: 'Questionnaire',
              routerLink: ''
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
  }

  showSearchBar() {
    this.showSearch = !this.showSearch;
  }

  closeSearch() {
    this.showSearch = false;
  }

}
