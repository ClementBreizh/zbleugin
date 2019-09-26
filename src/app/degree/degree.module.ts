import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeFormComponent } from './degree-form/degree-form.component';
import {MatCardModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [DegreeFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [DegreeFormComponent]
})
export class DegreeModule { }
