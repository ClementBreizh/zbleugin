import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyApiServiceService extends ApiServiceService<Company> {
  getAll() {
    return this.get('filtered');
  }

  getOne(id: number) {
    return this.get(id);
  }

  deleteOne(id: number) {
    return this.delete(id);
  }

  protected url(): string {
    return 'companies';
  }
}
