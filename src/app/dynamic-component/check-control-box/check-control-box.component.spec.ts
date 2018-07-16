import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckControlBoxComponent } from './check-control-box.component';

describe('CheckControlBoxComponent', () => {
  let component: CheckControlBoxComponent;
  let fixture: ComponentFixture<CheckControlBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckControlBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckControlBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
