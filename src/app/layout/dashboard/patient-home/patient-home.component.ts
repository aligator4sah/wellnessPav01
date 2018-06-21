import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StatusService} from '../../../service/status.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

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

}
