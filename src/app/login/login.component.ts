import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

interface Role {
  value: string;
  label: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roles: Role[];
  selectedRole: Role;
  selectedOption;
  searchOptions;
  loginForm: FormGroup;

  value: Date;

  constructor(
    public route: Router,
    private fb: FormBuilder,
    ) {
    this.roles = [
      {value: null, label: 'Select Role'},
      { value: 'Admin', label: 'Administrator' },
      { value: 'Clinician', label: 'Clinician' },
      { value: 'FrontDesk', label: 'Front Desk' }
    ];
  }

  ngOnInit() {
    localStorage.clear();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
    setTimeout(_ => {
      this.searchOptions = [
        { value: 'Administrator', label: 'Administrator' },
        { value: 'Clinician', label: 'Clinician' },
        { value: 'Front Desk', label: 'Front Desk' }
      ];
    }, 100);
  }

  login() {
      console.log(this.loginForm.value);
      localStorage.setItem('curUser', JSON.stringify(this.loginForm.value));
      this.route.navigateByUrl('dashBoard');
  }

}
