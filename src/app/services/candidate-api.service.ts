import { Injectable } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import {Candidate} from '../models/candidate';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateApiService extends ApiServiceService<Candidate> {
  getAll(params) {
    return this.get('filtered', params);
  }

  getOne(id: number) {
    return this.get(id)
      .pipe(map((c: Candidate) => {
        if (c.assessments && c.assessments.length) {
          for (const a of c.assessments) {
            a.validationDate = new Date(a.validationDate);
          }
        }
        // if (c.assessments && c.assessments.length) {
        //   for (let a of c.assessments) {
        //     a.validationDate = new Date(a['validationDate']);
        //   }
        // }
        if (c.feedback) {
          c.feedback.updatedAt = new Date(c.feedback.updatedAt);
        }

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
    return 'candidates';
  }
}
