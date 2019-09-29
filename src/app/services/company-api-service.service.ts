import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyApiServiceService extends ApiServiceService<Company> {
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
    return 'companies';
  }

}
