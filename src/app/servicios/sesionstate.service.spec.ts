import { TestBed } from '@angular/core/testing';

import { SesionstateService } from './sesionstate.service';

describe('SesionstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesionstateService = TestBed.get(SesionstateService);
    expect(service).toBeTruthy();
  });
});
