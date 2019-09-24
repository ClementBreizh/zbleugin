import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompanyListComponent, CompanyDetailsComponent, CompanyFormComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [CompanyListComponent, CompanyDetailsComponent, CompanyFormComponent]
})
export class CompanyModule { }
