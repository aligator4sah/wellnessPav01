import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePAppointmentComponent } from './create-p-appointment.component';

describe('CreatePAppointmentComponent', () => {
  let component: CreatePAppointmentComponent;
  let fixture: ComponentFixture<CreatePAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
