import { Injectable } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import {Person} from '../models/person';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService extends ApiServiceService<Person> {
  getAll(params) {
    return this.get('filtered', params);
  }

  getOne(id: number) {
    return this.get(id);
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

  find(value: string) {
    return this.get('autocomplete', {value, types: 'User,Person'} as any);
  }

  protected url(): string {
    return 'persons';
  }
}
