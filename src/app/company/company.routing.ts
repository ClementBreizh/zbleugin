import { Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';

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
    component: CompanyDetailsComponent
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
