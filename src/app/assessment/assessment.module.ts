import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatFormField } from '@angular/material';


@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormField
  ],
  exports: [AssessmentComponent]
})
export class AssessmentModule { }
