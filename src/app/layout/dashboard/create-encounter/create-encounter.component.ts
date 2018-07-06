import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CATEGORY, DISPOSITION, USER1} from '../../../model/mock';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-create-encounter',
  templateUrl: './create-encounter.component.html',
  styleUrls: ['./create-encounter.component.css']
})
export class CreateEncounterComponent implements OnInit {

  items: MenuItem[];

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  encounter1: any;
  encounter2: any;

  fakeUser = USER1;
  categories = CATEGORY;
  dispositions = DISPOSITION;
  icdcode = [];

  checked: boolean;
  activeIndex: number = 0;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    if (this.fakeUser.gender === 'Male') {
      this.checked = true;
    }
    this.form1 = this.fb.group({
      username: [this.fakeUser.username],
      firstname: [this.fakeUser.firstname],
      lastname: [this.fakeUser.lastname],
      gender: [this.checked],
      dob: [this.fakeUser.dob],
      confirm: ['', Validators.required]
    });

    this.form2 = this.fb.group({
      supervisor: ['', Validators.required],
      servicestu: [''],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      systolic: [],
      diastolic: [],
      heartRate: [],
      respiratoryRate: [],
      temperature: [],
      oxygen: [],
      waist: [],
      head: [],
      category: ['', Validators.required],
      complaint: ['', Validators.required],
      complaintcode: [''],
      reason: ['', Validators.required],
      reasoncode: [''],
      service: ['', Validators.required],
      servicecode: [''],
      disposition: ['', Validators.required]
    });

    this.form3 = this.fb.group({
      subjective: ['', [Validators.required, Validators.minLength(5)]],
      objective: ['', [Validators.required, Validators.minLength(5)]],
      assessment: ['', [Validators.required, Validators.minLength(5)]],
      plan: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.items = [
      {label: 'Confirm Patient'},
      {label: 'Vital Information'},
      {label: 'SOAP Note'},
      {label: 'Department Detail'}
    ];
  }



  goPrevious() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = 3;
    }
  }

  goNext() {
    if (this.activeIndex < 3) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }

    //bind the input form value
    if (this.activeIndex === 2) {
      this.encounter1 = this.form2.value;
      console.log(this.encounter1);
    } else if (this.activeIndex === 3) {
      this.encounter2 = this.form3.value;
      console.log(this.encounter2);
    }
  }

  goBack() {
    window.history.back();
  }

  submit() {
   console.log(this.encounter1);
   console.log(this.encounter2);
  }

}
