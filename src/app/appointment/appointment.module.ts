import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { MatDatepickerModule, MatNativeDateModule, MatOption } from '@angular/material';
import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatIconModule, MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSliderModule,
  MatSortModule, MatTableModule, MatTabsModule, MatListModule,
  MatGridListModule
} from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppointmentListComponent, AppointmentDetailsComponent, AppointmentFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
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
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatGridListModule
  ],
  exports: [AppointmentListComponent, AppointmentDetailsComponent, AppointmentFormComponent]
})
export class AppointmentModule { }
