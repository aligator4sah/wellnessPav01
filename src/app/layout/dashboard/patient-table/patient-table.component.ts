import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  clients = [];
  cols : any[];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.clients = this.userService.getClientTable();
    console.log(this.clients);
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'firstname', header: 'First Name' },
      { field: 'lastname', header: 'Last Name' },
      { field: 'dob', header: 'Date of birth' },
      { field: 'gender', header: 'Gender'},
      { field: 'lastEncounter', header: 'Last Encounter'},
    ];
  }

}
