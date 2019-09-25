import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import { routes as companyRoutes } from './company/company.routing';
import { routes as candidateRoutes } from './candidate/candidate.routing';

const routes: Routes = [
  { path: 'candidate', children: candidateRoutes },
  { path: 'company', children: companyRoutes },

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'entreprises', component: NotImplementedComponent },
  { path: 'rendezvous', component: NotImplementedComponent },
  { path: 'adminpanel', component: NotImplementedComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
