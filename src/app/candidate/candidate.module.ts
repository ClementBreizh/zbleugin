import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidatesListComponent} from './candidates-list/candidates-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CandidatesListComponent, CandidateDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Ours.
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    CandidatesListComponent,
    CandidateDetailsComponent
  ]
})
export class CandidateModule { }
