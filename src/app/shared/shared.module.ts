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
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoaderComponent, PersonPipe, AddressComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    PersonPipe,
    AddressComponent
  ]
})
export class SharedModule { }
