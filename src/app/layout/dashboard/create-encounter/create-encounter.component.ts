import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CATEGORY, DISPOSITION, USER1} from '../../../model/mock';

@Component({
  selector: 'app-create-encounter',
  templateUrl: './create-encounter.component.html',
  styleUrls: ['./create-encounter.component.css']
})
export class CreateEncounterComponent implements OnInit {

  items: MenuItem[];

  form1: FormGroup;
  form2: FormGroup;

  fakeUser = USER1;
  categories = CATEGORY;
  dispositions = DISPOSITION;
  icdcode = [];
  hspcode = [];
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
      category: ['', Validators.required],
      complaint: ['', Validators.required],
      complaintcode: [''],
      reason: ['', Validators.required],
      reasoncode: [''],
      service: ['', Validators.required],
      servicecode: [''],
      disposition: ['', Validators.required]
    });
    this.items = [
      {label: 'Confirm Patient'},
      {label: 'Input Encounter'},
      {label: 'Input SOAP Note'},
      {label: 'Confirmation'}
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
  }

  goBack() {
    window.history.back();
  }

}
