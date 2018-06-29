import { Component, OnInit } from '@angular/core';
import {DEPARTMENT, ROLES} from '../model/mock';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  departments = DEPARTMENT;
  roles = ROLES;

  constructor() { }

  ngOnInit() {
  }

  back() {
    window.history.back();
  }

}
