import { Injectable } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import {User} from '../models/user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserApiService extends ApiServiceService<User> {
  getAll(params) {
    return this.get('filtered', params);
  }

  // getOne(id: number) {
  //   return this.get(id)
  // }

  getOne(id: number) {
    return this.get(id)
      .pipe(map((u: User) => {
        return u;
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
    return 'users';
  }
}
