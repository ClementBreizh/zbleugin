import { Injectable } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import {AcquiredMatter} from '../models/acquiredMatter';

@Injectable({
  providedIn: 'root'
})
export class AcquiredMatterApiService extends ApiServiceService<AcquiredMatter> {
  getAll(params) {
    return this.get('', params);
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
    return 'acquiredmatters';
  }
}
