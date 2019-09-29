import { Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

export const routes: Routes = [{
  path: 'list',
  component: PersonListComponent
}, {
  path: 'create',
  component: PersonFormComponent
}, {
  path: ':id',
  children: [{
    path: '',
    pathMatch: 'full',
    component: PersonDetailsComponent
  }, {
    path: 'edit',
    component: PersonFormComponent
  }]
}];

