import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CandidatesListComponent} from './candidates-list/candidates-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

@NgModule({
  declarations: [CandidatesListComponent, CandidateDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CandidatesListComponent,
    CandidateDetailsComponent
  ]
})
export class CandidateModule { }
