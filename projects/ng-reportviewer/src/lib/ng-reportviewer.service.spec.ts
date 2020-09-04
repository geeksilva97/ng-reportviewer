import { TestBed } from '@angular/core/testing';

import { NgReportviewerService } from './ng-reportviewer.service';

describe('NgReportviewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgReportviewerService = TestBed.get(NgReportviewerService);
    expect(service).toBeTruthy();
  });
});
