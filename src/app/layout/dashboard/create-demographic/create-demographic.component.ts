import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-demographic',
  templateUrl: './create-demographic.component.html',
  styleUrls: ['./create-demographic.component.css']
})
export class CreateDemographicComponent implements OnInit {

  /** TODO: create form group and get the information by using form control
   *        delete the ngModel and change to form control
   * */
  value: Date;
  selectedRace: string;
  selectedGender: string;
  selectedState: string;
  selectedLivingArrange: string[] = [];
  selectedResident: string[] = [];

  genders = GENDER;
  races = RACE;
  states = STATES;
  livingArranges = LIVING;
  residentCondition = RESIDENT;


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


export const STATES = [
  {label: 'States', value: null}
];

export const LIVING = [
  {label: 'Alone', value: 'Alone'},
  {label: 'With Spouse or unrelated partner', value: "With Spouse or unrelated partner"},
];

export const RESIDENT = [
  {label: 'One story(no stairs)', value: 'One story(no stairs)'},
  {label: 'Stairs to home entrance with ramp', value: 'Stairs to home entrance with ramp'}
];
