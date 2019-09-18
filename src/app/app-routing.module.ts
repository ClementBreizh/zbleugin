import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesListComponent} from './candidate/candidates-list/candidates-list.component';

const routes: Routes = [
  {
    path: 'candidates', component: CandidatesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
