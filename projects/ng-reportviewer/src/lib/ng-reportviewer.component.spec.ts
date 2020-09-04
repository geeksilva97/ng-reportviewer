import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgReportviewerComponent } from './ng-reportviewer.component';

describe('NgReportviewerComponent', () => {
  let component: NgReportviewerComponent;
  let fixture: ComponentFixture<NgReportviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgReportviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgReportviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
