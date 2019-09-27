import { TestBed } from '@angular/core/testing';

import { DegreeApiService } from './degree-api.service';

describe('DegreeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DegreeApiService = TestBed.get(DegreeApiService);
    expect(service).toBeTruthy();
  });
});
