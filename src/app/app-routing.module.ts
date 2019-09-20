import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesListComponent} from './candidate/candidates-list/candidates-list.component';
import {CandidateDetailsComponent} from './candidate/candidate-details/candidate-details.component';

const routes: Routes = [
  {
    path: 'candidate/list', component: CandidatesListComponent},{
    path: 'candidate/:id', component: CandidateDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
