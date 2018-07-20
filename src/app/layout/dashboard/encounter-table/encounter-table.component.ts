import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-encounter-table',
  templateUrl: './encounter-table.component.html',
  styleUrls: ['./encounter-table.component.css']
})
export class EncounterTableComponent implements OnInit {

  encounters: any[];
  cols: any[];
  items: MenuItem[];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.encounters = this.userService.getEncounterTable();
    // console.log(this.encounters);
    this.cols = [
      { field: 'id', header: 'Encounter Id' },
      { field: 'date', header: 'Date' },
      { field: 'category', header: 'Category' },
      { field: 'provider', header: 'Provider' }
    ];

    this.items = [
      {
        label: 'Vital Info',
        icon: 'fa-heartbeat',
        command: () => {
          this.goVital();
        }},
      {
        label: 'SOAP',
        icon: 'fa-medkit',
        command: () => {
          this.goSOAP();
        }}
    ];
  }

  goVital() {
    this.router.navigateByUrl('/dashBoard/encounter-view');
  }


  goSOAP() {
    this.router.navigateByUrl('/dashBoard/soap-list');
  }

  goBack() {
    window.history.back();
  }

}
