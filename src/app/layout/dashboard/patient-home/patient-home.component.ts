import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StatusService} from '../../../service/status.service';
import {DEPARTMENT} from '../../../model/mock';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  display: boolean = false;
  departments = DEPARTMENT;
  selectedDepartment: string;
  date8: Date;
  showAvailable: boolean = false;
  instructions: string;
  available: boolean = false;

  constructor(
    private router: Router,
    private statuService: StatusService,
  ) { }

  ngOnInit() {
  }

  editDemographic() {
    this.statuService.demoaction$.next('edit');
    this.router.navigateByUrl('/dashBoard/create-demographic');
  }

  showDialog() {
    this.display = true;
  }

  checkAvailability() {
    this.showAvailable = true;
    if (this.selectedDepartment === "Nutrition & Wellness") {
      this.available = true;
      this.instructions = "Department is available. Please inform the clinician."
    } else {
      this.available = false;
      this.instructions = "Department is not available. Please make an appointment in other time."
    }}


}
