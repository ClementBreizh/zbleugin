import { TestBed } from '@angular/core/testing';

import { AcquiredMatterApiService } from './acquired-matter-api.service';

describe('AcquiredMatterApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcquiredMatterApiService = TestBed.get(AcquiredMatterApiService);
    expect(service).toBeTruthy();
  });
});
