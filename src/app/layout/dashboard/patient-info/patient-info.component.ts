import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  patient = JSON.parse(localStorage.getItem("curPatient"));

  constructor() { }

  ngOnInit() {

  }

}
