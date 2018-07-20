import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapListComponent } from './soap-list.component';

describe('SoapListComponent', () => {
  let component: SoapListComponent;
  let fixture: ComponentFixture<SoapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
