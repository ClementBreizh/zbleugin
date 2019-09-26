import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesListComponent} from './candidate/candidates-list/candidates-list.component';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import {CandidateDetailsComponent} from './candidate/candidate-details/candidate-details.component';
import { routes as companyRoutes } from './company/company.routing';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/guard.guard';

const routes: Routes = [
  { path: 'candidates/list', component: CandidatesListComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'appointment', component: NotImplementedComponent, canActivate: [AuthGuard] },
  { path: 'candidate/:id', component: CandidateDetailsComponent },
  { path: 'company', children: companyRoutes, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
