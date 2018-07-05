import { Component, OnInit } from '@angular/core';
import {DEPARTMENT, ROLES} from '../model/mock';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  departments = DEPARTMENT;
  roles = ROLES;
  selectRole: string;
  showEnrollYear: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      email: [''],
      phone: [''],
      department: ['', Validators.required],
      role: ['', Validators.required],
      year: ['']
    });
    this.registerForm.controls['role'].valueChanges.subscribe(value => {
      this.selectRole = value;
      console.log(this.selectRole);
      if (this.selectRole === "Student") {
        this.showEnrollYear = true;
      } else {
        this.showEnrollYear = false;
      }
    });
  }

  back() {
    window.history.back();
  }

}
