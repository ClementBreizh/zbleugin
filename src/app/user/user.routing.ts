import { Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserDetailsComponent} from './user-details/user-details.component';

export const routes: Routes = [{
  path: 'list',
  component: UserListComponent
}, {
  path: 'create',
  component: UserFormComponent
}, {
  path: ':id',
  children: [{
    path: '',
    pathMatch: 'full',
    component: UserDetailsComponent
  }, {
    path: 'edit',
    component: UserFormComponent
  }]
}];
