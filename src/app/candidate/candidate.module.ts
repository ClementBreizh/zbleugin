import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidatesListComponent} from './candidates-list/candidates-list.component';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

@NgModule({
  declarations: [CandidatesListComponent, CandidateDetailsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    CandidatesListComponent,
    CandidateDetailsComponent
  ]
})
export class CandidateModule { }
