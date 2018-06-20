import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-encounter-table',
  templateUrl: './encounter-table.component.html',
  styleUrls: ['./encounter-table.component.css']
})
export class EncounterTableComponent implements OnInit {

  encounters: any[];
  cols: any[];

  constructor(
    private userService: UserService
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
  }

  goBack() {
    window.history.back();
  }

}
