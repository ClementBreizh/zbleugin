import { TestBed } from '@angular/core/testing';

import { AppointmentApiService } from './appointment-api.service';

describe('AppointmentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentApiService = TestBed.get(AppointmentApiService);
    expect(service).toBeTruthy();
  });
});
