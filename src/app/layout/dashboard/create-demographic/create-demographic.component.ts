import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-demographic',
  templateUrl: './create-demographic.component.html',
  styleUrls: ['./create-demographic.component.css']
})
export class CreateDemographicComponent implements OnInit {

  value: Date;
  selectedRace: string;
  selectedGender: string;
  genders = GENDER;
  races = RACE;

  constructor() { }

  ngOnInit() {

  }

}

export const GENDER = [
  {label: 'Gender', value: null},
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'}
];

export const RACE = [
  {label: 'Race', value: null},
  {label: 'Native American', value: 'Native American'},
  {label: 'Asian or Pacific Island', value: ''},
];
