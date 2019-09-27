import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeFormComponent } from './degree-form/degree-form.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DegreeFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [DegreeFormComponent]
})
export class DegreeModule { }
