import { Injectable } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import {Candidate} from '../models/candidate';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateApiService extends ApiServiceService<Candidate> {
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

  protected url(): string {
    return 'candidates';
  }
}
