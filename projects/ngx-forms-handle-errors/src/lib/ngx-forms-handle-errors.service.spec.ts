import { TestBed } from '@angular/core/testing';

import { NgxFormsHandleErrorsService } from './ngx-forms-handle-errors.service';

describe('NgxFormsHandleErrorsService', () => {
  let service: NgxFormsHandleErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormsHandleErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
