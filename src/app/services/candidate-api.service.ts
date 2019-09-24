import { Injectable } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import {Candidate} from '../models/candidate';
import {HttpParams} from '@angular/common/http';

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

  protected url(): string {
    return 'candidates';
  }
}
