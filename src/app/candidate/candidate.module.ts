import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidateListComponent} from './candidate-list/candidate-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatIconModule, MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSliderModule,
  MatSortModule, MatTableModule, MatTabsModule, MatListModule,
  MatGridListModule
} from '@angular/material';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import {DegreeModule} from '../degree/degree.module';
import {AssessmentModule} from '../assessment/assessment.module';
import {MatterModule} from '../matter/matter.module';

@NgModule({
  declarations: [CandidateListComponent, CandidateDetailsComponent, CandidateFormComponent],
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
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatSliderModule,
    DegreeModule,
    AssessmentModule,
    MatterModule
  ],
  exports: [
    CandidateListComponent,
    CandidateDetailsComponent,
    CandidateFormComponent
  ]
})
export class CandidateModule { }
