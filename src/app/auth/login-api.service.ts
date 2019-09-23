import { Injectable } from '@angular/core';
import { User } from './user';
import { CurrentUserService } from './current-user.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private users: User[];

  constructor(private currentUser : CurrentUserService) {

    this.users = [{
      id: 1,
      username: 'admin',
      password: 'adminadmin',
      admin: true
    }];
   }

   login(login: string, password: string) : Observable<User> {
     const user = this.users.find(u => u.username === login && u.password === password) || null;

     return of(user)
      .pipe(tap(v => {
        if (v && v.id) {
          this.currentUser.set(v);
        }
      }));
  }
}
