import { TestBed } from '@angular/core/testing';

import { RedirectAlertService } from './redirect-alert.service';

describe('RedirectAlertService', () => {
  let service: RedirectAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
