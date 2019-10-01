import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from '../shared/shared.module';

import {
  MatButtonModule, MatCardModule, MatExpansionModule,
  MatIconModule, MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSliderModule,
  MatSortModule, MatTableModule, MatTabsModule, MatListModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Ours.
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
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatSliderModule,
    SharedModule
  ],
  exports: [
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent]
})
export class UserModule { }
