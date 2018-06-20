import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GENDER, RACE, STATES, LIVING, RESIDENT, MARRYSTATUS, EMPLOYMENTS, EMPLOYSTATUS} from './../../../model/mock';
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

  createDemographicForm: FormGroup;


  constructor(
    private fb : FormBuilder
  ) {}

  ngOnInit() {
    this.createDemographicForm = this.fb.group({
      firstName: ['', Validators.required,],
      middleName: [''],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', Validators.required, Validators.email],
      gender: ['', Validators.required],
      race: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      livingArranges: ['', Validators.required],
      residentCondition: ['', Validators.required],
      married: ['', Validators.required],
      together:[''],
      employment: ['', Validators.required],
      employType: ['']
    });

    this.createDemographicForm.controls['married'].valueChanges.subscribe(value => {
      if (value === "Married") {
        this.showMarrayStatus = true;
      } else {
        this.showMarrayStatus = false;
      }
    });
    this.createDemographicForm.controls['employment'].valueChanges.subscribe(value => {
      if (value === "Employed") {
        this.showEmploymentType = true;
      } else {
        this.showEmploymentType = false;
      }
    })

  }

  onSubmmit(){
    console.log(this.createDemographicForm.value);
  }
}

