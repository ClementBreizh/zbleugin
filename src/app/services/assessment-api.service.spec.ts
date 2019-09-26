import { TestBed } from '@angular/core/testing';

import { AssessmentApiService } from './assessment-api.service';

describe('AssessmentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssessmentApiService = TestBed.get(AssessmentApiService);
    expect(service).toBeTruthy();
  });
});
