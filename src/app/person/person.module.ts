import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule, MatTableModule, MatProgressSpinnerModule,
  MatIconModule, MatButtonModule, MatCardModule, MatExpansionModule,
  MatSortModule, MatPaginatorModule, MatListModule, MatTabsModule,
  MatGridListModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { DegreeModule } from '../degree/degree.module';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [PersonListComponent, PersonFormComponent, PersonDetailsComponent],
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
    DegreeModule
  ],
  exports: [
    PersonListComponent,
    PersonFormComponent,
    PersonDetailsComponent
  ]
})
export class PersonModule { }
