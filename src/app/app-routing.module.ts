import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesListComponent} from './candidate/candidates-list/candidates-list.component';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';


const routes: Routes = [
  {
    path: 'candidates', component: CandidatesListComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
