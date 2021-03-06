import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {SelectItem} from 'primeng/api';
import {Router} from '@angular/router';
import {StatusService} from '../../../service/status.service';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  clients = [];
  cols : any[];

  genders: SelectItem[];
  selectedColumns: any[];

  constructor(
    private userService: UserService,
    private statusService: StatusService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.clients = this.userService.getClientTable();
    this.statusService.existMember$.next(false);
    // console.log(this.clients);
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'firstname', header: 'First Name' },
      { field: 'lastname', header: 'Last Name' },
      { field: 'dob', header: 'Date of birth' },
      { field: 'gender', header: 'Gender'},
      { field: 'lastEncounter', header: 'Last Encounter'},
    ];

    this.genders = [
      {label: 'All genders', value: null},
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'}
    ];
    this.selectedColumns = this.cols;
  }

  checkDetail(client: any) {
    this.statusService.existMember$.next(true);
    localStorage.setItem('curPatient', JSON.stringify(client));
    this.router.navigateByUrl('/dashBoard/patient-home/' + client.id);
  }
}
