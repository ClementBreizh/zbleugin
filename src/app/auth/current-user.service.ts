import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private current = new BehaviorSubject<User>(null);

  get(): Observable<User> {
    return this.current;
  }

  set(user: User|null): void {
    this.current.next(user);
  }
}
