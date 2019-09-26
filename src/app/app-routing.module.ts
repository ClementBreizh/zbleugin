import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import { routes as companyRoutes } from './company/company.routing';
import { routes as candidateRoutes } from './candidate/candidate.routing';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/guard.guard';

const routes: Routes = [
  { path: 'candidate', children: candidateRoutes},
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'appointment', component: NotImplementedComponent},
  { path: 'company', children: companyRoutes}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
