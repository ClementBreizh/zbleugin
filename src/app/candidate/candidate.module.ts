import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidatesListComponent} from './candidates-list/candidates-list.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
    AppRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    CandidatesListComponent,
    CandidateDetailsComponent
  ]
})
export class CandidateModule { }
