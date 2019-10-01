import { TestBed } from '@angular/core/testing';

import { MatterApiService } from './matter-api.service';

describe('MatterApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatterApiService = TestBed.get(MatterApiService);
    expect(service).toBeTruthy();
  });
});
