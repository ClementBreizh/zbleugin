import { TestBed } from '@angular/core/testing';

import { CompanyApiServiceService } from './company-api-service.service';

describe('CompanyApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyApiServiceService = TestBed.get(CompanyApiServiceService);
    expect(service).toBeTruthy();
  });
});
