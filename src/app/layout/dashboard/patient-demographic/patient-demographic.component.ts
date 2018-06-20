import { Component, OnInit } from '@angular/core';
import {USER1} from '../../../model/mock';

@Component({
  selector: 'app-patient-demographic',
  templateUrl: './patient-demographic.component.html',
  styleUrls: ['./patient-demographic.component.css']
})
export class PatientDemographicComponent implements OnInit {

  fakeuser = USER1;

  //TODO: add other client information data here

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

}
