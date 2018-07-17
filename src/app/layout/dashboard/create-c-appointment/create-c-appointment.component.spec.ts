import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCAppointmentComponent } from './create-c-appointment.component';

describe('CreateCAppointmentComponent', () => {
  let component: CreateCAppointmentComponent;
  let fixture: ComponentFixture<CreateCAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
