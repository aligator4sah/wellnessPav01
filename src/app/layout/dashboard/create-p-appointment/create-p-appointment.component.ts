import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AVAILABLETIME, DEPARTMENT} from '../../../model/mock';

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
  availableTime = AVAILABLETIME;
  selectedValue: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.appForm = this.fb.group({
      department: ['', Validators.required],
      complaint: ['', Validators.required]
    });
    this.stepper = 0;
  }

  next() {
    this.stepper++;
  }

  previous() {
    this.stepper--;
  }

  goBack() {
    window.history.back();
  }

}
