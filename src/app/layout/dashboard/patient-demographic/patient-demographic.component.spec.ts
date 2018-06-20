import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDemographicComponent } from './patient-demographic.component';

describe('PatientDemographicComponent', () => {
  let component: PatientDemographicComponent;
  let fixture: ComponentFixture<PatientDemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
