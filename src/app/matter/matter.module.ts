import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatterFormComponent } from './matter-form/matter-form.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MatterFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports: [MatterFormComponent]
})
export class MatterModule { }
