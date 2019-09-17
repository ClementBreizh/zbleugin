import { TestBed } from '@angular/core/testing';

import { ZbleuginAPIService } from './zbleugin-api.service';

describe('ZbleuginAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZbleuginAPIService = TestBed.get(ZbleuginAPIService);
    expect(service).toBeTruthy();
  });
});
