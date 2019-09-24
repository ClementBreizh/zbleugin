import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesListComponent} from './candidate/candidates-list/candidates-list.component';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import {CandidateDetailsComponent} from './candidate/candidate-details/candidate-details.component';
import { routes as companyRoutes } from './company/company.routing';

const routes: Routes = [
  {
    path: 'candidates/list', component: CandidatesListComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'entreprises', component: NotImplementedComponent
  },
  {
    path: 'rendezvous', component: NotImplementedComponent
  },
  {
    path: 'adminpanel', component: NotImplementedComponent
  },
  {
    path: 'candidate/:id', component: CandidateDetailsComponent
  }, { path: 'company', children: companyRoutes }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
