import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemographicComponent } from './create-demographic.component';

describe('CreateDemographicComponent', () => {
  let component: CreateDemographicComponent;
  let fixture: ComponentFixture<CreateDemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
