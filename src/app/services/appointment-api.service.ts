import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { ApiServiceService } from './api-service.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService extends ApiServiceService<Appointment> {
  getAll(params) {
    return this.get('filtered', params);
  }

  getOne(id: number) {
    return this.get(id)
      .pipe(map((c: Appointment) => {
        return c;
    }));
  }

  deleteOne(id: number) {
    return this.delete(id);
  }

  create(data) {
    return this.post(data);
  }

  edit(id, data) {
    return this.put(id, data);
  }

  protected url(): string {
    return 'appointments';
  }
}
