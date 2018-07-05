import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianScheduleComponent } from './clinician-schedule.component';

describe('ClinicianScheduleComponent', () => {
  let component: ClinicianScheduleComponent;
  let fixture: ComponentFixture<ClinicianScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
