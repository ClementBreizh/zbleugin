import { Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

export const routes: Routes = [{
  path: 'list',
  component: CandidateListComponent
}, {
  path: 'create',
  component: CandidateFormComponent
}, {
  path: ':id',
  children: [{
    path: '',
    pathMatch: 'full',
    component: CandidateDetailsComponent
  }, {
    path: 'edit',
    component: CandidateFormComponent
  }]
}];
