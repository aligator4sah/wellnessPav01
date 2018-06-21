import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  GENDER, RACE, STATES, LIVING, RESIDENT, MARRYSTATUS, EMPLOYMENTS, EMPLOYSTATUS, VALIDATION_MESSAGE,
  USER1
} from './../../../model/mock';
import {StatusService} from '../../../service/status.service';
@Component({
  selector: 'app-create-demographic',
  templateUrl: './create-demographic.component.html',
  styleUrls: ['./create-demographic.component.css']
})
export class CreateDemographicComponent implements OnInit, OnDestroy {


  /** TODO: create form group and get the information by using form control
   *        delete the ngModel and change to form control
   * */
  value: Date;
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
  fakeUser = USER1;

  createDemographicForm: FormGroup;

  validation_messages = VALIDATION_MESSAGE;


  constructor(
    private fb : FormBuilder,
    private statusService: StatusService,
  ) {}

  ngOnInit() {
    if (this.statusService.demoaction$.getValue() === 'create') {
      this.createDemographicForm = this.fb.group({
        firstName: ['', Validators.required,],
        middleName: [''],
        lastName: ['', Validators.required],
        birthday: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
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
    } else {
      this.createDemographicForm = this.fb.group({
        firstName: [this.fakeUser.firstname, Validators.required,],
        middleName: [''],
        lastName: [this.fakeUser.lastname, Validators.required],
        birthday: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        gender: [this.fakeUser.gender, Validators.required],
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
    }


    this.createDemographicForm.controls['married'].valueChanges.subscribe(value => {
      if (value === 'Married') {
        this.showMarrayStatus = true;
      } else {
        this.showMarrayStatus = false;
      }
    });
    this.createDemographicForm.controls['employment'].valueChanges.subscribe(value => {
      if (value === 'Employed') {
        this.showEmploymentType = true;
      } else {
        this.showEmploymentType = false;
      }
    });

  }

  ngOnDestroy() {
   this.statusService.demoaction$.next('create');
  }

  onSubmmit(){
    console.log(this.createDemographicForm.value);
  }

  goBack() {
    window.history.back();
  }
}

