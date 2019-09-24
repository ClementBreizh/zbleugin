import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyFormComponent } from './company-form/company-form.component';

@NgModule({
  declarations: [CompanyListComponent, CompanyDetailsComponent, CompanyFormComponent],
  imports: [
    CommonModule
  ],
  exports: [CompanyListComponent, CompanyDetailsComponent, CompanyFormComponent]
})
export class CompanyModule { }
