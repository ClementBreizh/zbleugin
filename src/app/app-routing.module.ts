import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import { routes as userRoutes } from './user/user.routing';
import {CandidateDetailsComponent} from './candidate/candidate-details/candidate-details.component';
import {CandidateListComponent} from './candidate/candidate-list/candidate-list.component';
import { routes as appointmentRoutes } from './appointment/appointment.routing';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/guard.guard';
import {NavComponent} from './skeleton/nav/nav.component';
import { routes as companyRoutes } from './company/company.routing';
import { routes as candidateRoutes } from './candidate/candidate.routing';
import { routes as personRoutes } from './person/person-routing';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';

const routes: Routes = [
  { path: 'candidate', children: candidateRoutes},
  { path: 'user', children: userRoutes},
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'appointment', component: NotImplementedComponent},
  { path: 'company', children: companyRoutes}
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'adminpanel', component: NotImplementedComponent, canActivate: [AuthGuard]},
  { path: 'candidate', children: candidateRoutes, canActivate: [AuthGuard] },
  { path: 'person', children: personRoutes, canActivate: [AuthGuard]},
  { path: 'company', children: companyRoutes, canActivate: [AuthGuard]},
  { path: 'appointment', children: appointmentRoutes, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
