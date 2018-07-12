import { Component, OnInit } from '@angular/core';
import {APPOINTMENT} from '../../../model/mock';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  appointments = APPOINTMENT;
  cols : any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'time', header: 'Time' },
      { field: 'department', header: 'Department' },
      { field: 'status', header: 'Status' }
    ];
  }

}
