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
        label: 'Patient', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              label: 'TV 1',
              items: [{label: 'TV 1.1'}, {label: 'TV 1.2'}]
            },
            {
              label: 'TV 2'
            }
          ],
          [
            {
              label: 'TV 3'
            },
            {
              label: 'TV 4'
            }
          ]
        ]
      },
      {
        label: 'Appointments', icon: 'fa fa-fw fa-calendar',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'}, {label: 'Sports 1.2'}]
            },
            {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'}, {label: 'Sports 2.2'}]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'}, {label: 'Sports 3.2'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'}, {label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'}, {label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'}, {label: 'Sports 6.2'}]
            }
          ]
        ]
      }
    ];
  }

}
