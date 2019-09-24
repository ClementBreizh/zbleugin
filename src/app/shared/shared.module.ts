import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { LoaderComponent } from './loader/loader.component';
import { PersonPipe } from './person/person.pipe';

@NgModule({
  declarations: [LoaderComponent, PersonPipe],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    // MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    LoaderComponent,
    PersonPipe
  ]
})
export class SharedModule { }
