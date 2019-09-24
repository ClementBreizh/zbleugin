import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidatesListComponent} from './candidates-list/candidates-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSortModule,
  MatTableModule, MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [CandidatesListComponent, CandidateDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Ours.
    AppRoutingModule,
    SharedModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  exports: [
    CandidatesListComponent,
    CandidateDetailsComponent
  ]
})
export class CandidateModule { }
