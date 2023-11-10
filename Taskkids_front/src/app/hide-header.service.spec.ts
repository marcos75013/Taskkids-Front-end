import { TestBed } from '@angular/core/testing';

import { HideHeaderService } from './hide-header.service';

describe('HideHeaderService', () => {
  let service: HideHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
