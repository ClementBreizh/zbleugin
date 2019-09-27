import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentFormComponent } from './assessment-form.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule, MatNativeDateModule, MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AssessmentFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports: [AssessmentFormComponent]
})
export class AssessmentModule { }
