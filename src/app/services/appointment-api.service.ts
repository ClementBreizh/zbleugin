import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService extends ApiServiceService<Appointment> {
  getAll(params) {
    return this.get('', params);
  }

  getOne(id: number) {
    return this.get(id);
  }

  deleteOne(id: number) {
    return this.delete(id);
  }

  protected url(): string {
    return 'appointments';
  }
}
