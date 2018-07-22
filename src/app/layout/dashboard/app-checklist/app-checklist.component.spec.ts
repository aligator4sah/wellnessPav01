import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChecklistComponent } from './app-checklist.component';

describe('AppChecklistComponent', () => {
  let component: AppChecklistComponent;
  let fixture: ComponentFixture<AppChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
