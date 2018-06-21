import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {USER1} from '../../../model/mock';

@Component({
  selector: 'app-create-encounter',
  templateUrl: './create-encounter.component.html',
  styleUrls: ['./create-encounter.component.css']
})
export class CreateEncounterComponent implements OnInit {

  items: MenuItem[];

  form1: FormGroup;
  fakeUser = USER1;
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
      dob: [this.fakeUser.dob]
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
