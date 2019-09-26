import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import {CandidateDetailsComponent} from './candidate/candidate-details/candidate-details.component';
import {CandidateListComponent} from './candidate/candidate-list/candidate-list.component';
import { routes as appointmentRoutes } from './appointment/appointment.routing';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/guard.guard';
import {NavComponent} from './skeleton/nav/nav.component';
import { routes as companyRoutes } from './company/company.routing';
import { routes as candidateRoutes } from './candidate/candidate.routing';

const routes: Routes = [
  {
    path: 'candidates/list', component: CandidateListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  { path: 'company', children: companyRoutes, canActivate: [AuthGuard]
  },
  {
    path: 'appointment', children: appointmentRoutes, canActivate: [AuthGuard]
  },
  {
    path: 'adminpanel', component: NotImplementedComponent, canActivate: [AuthGuard]
  },
  {
    path: 'candidate/:id', component: CandidateDetailsComponent, canActivate: [AuthGuard]
  },

  { path: 'candidate', children: candidateRoutes, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'appointment', component: NotImplementedComponent, canActivate: [AuthGuard] },
  { path: 'company', children: companyRoutes, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
