import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DEPARTMENT} from '../../../model/mock';

@Component({
  selector: 'app-create-p-appointment',
  templateUrl: './create-p-appointment.component.html',
  styleUrls: ['./create-p-appointment.component.css']
})
export class CreatePAppointmentComponent implements OnInit {

  appForm: FormGroup;
  stepper: number;
  date11: Date[];
  departments = DEPARTMENT;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.appForm = this.fb.group({
      department: [],
      complaint: []
    });
    this.stepper = 0;
  }

}
