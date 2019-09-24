import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CandidateDetailsComponent } from '../candidate/candidate-details/candidate-details.component';
import { CompanyFormComponent } from './company-form/company-form.component';

export const routes: Routes = [{
  path: 'list',
  component: CompanyListComponent
}, {
  path: 'create',
  component: CompanyFormComponent
}, {
  path: ':id',
  pathMatch: 'full',
  children: [{
    path: '',
    pathMatch: 'full',
    component: CandidateDetailsComponent
  }, {
    path: 'edit',
    component: CompanyFormComponent
  }]
}];

// Autre possibilite de formatage.
// export const routes2: Routes = [
//   { path: 'list',       component: CompanyListComponent },
//   { path: 'create',     component: CompanyFormComponent }, {
//     path: ':id',
//     pathMatch: 'full',
//     children: [
//       { path: '',       component: CandidateDetailsComponent, pathMatch: 'full' },
//       { path: 'edit',   component: CompanyFormComponent }
//     ]
// }];
