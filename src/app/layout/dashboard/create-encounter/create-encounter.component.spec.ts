import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEncounterComponent } from './create-encounter.component';

describe('CreateEncounterComponent', () => {
  let component: CreateEncounterComponent;
  let fixture: ComponentFixture<CreateEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
