import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterTableComponent } from './encounter-table.component';

describe('EncounterTableComponent', () => {
  let component: EncounterTableComponent;
  let fixture: ComponentFixture<EncounterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
