import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

 showMarrayStatus: boolean = false;
 showEmploymentType: boolean = false;

  genders = GENDER;
  races = RACE;
  states = STATES;
  livingArranges = LIVING;
  residentCondition = RESIDENT;
  marryStatus = MARRYSTATUS;
  employStatus = EMPLOYMENTS;
  employTypes = EMPLOYSTATUS;

  additionalForm: FormGroup;


  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.additionalForm = this.fb.group({
      married: ['', Validators.required],
      together:[''],
      employment: ['', Validators.required],
      employType: ['']
    });

    this.additionalForm.controls['married'].valueChanges.subscribe(value => {
      if (value === "Married") {
        this.showMarrayStatus = true;
      } else {
        this.showMarrayStatus = false;
      }
    });
    this.additionalForm.controls['employment'].valueChanges.subscribe(value => {
      if (value === "Employed") {
        this.showEmploymentType = true;
      } else {
        this.showEmploymentType = false;
      }
    })

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


export const MARRYSTATUS = [
  {label: 'Martial Status', value: null},
  {label: 'Married', value: 'Married'},
  {label: 'Single', value: 'Single'},
  {label: 'With partner', value: 'With partner'},
];


export const EMPLOYMENTS = [
  {label: 'Employement Status', value: null},
  {label: 'Employed', value: 'Employed'},
  {label: 'Unemployed', value: 'Unemployed'},
];


export const EMPLOYSTATUS = [
  {label: 'Employment Type', value: null},
  {label: 'Full time', value: 'Full time'},
  {label: 'Part time', value: 'Part time'},
]
