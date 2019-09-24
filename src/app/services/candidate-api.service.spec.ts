import { TestBed } from '@angular/core/testing';

import { CandidateApiService } from './candidate-api.service';

describe('CandidateApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateApiService = TestBed.get(CandidateApiService);
    expect(service).toBeTruthy();
  });
});
