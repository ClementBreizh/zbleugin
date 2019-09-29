import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserFormComponent],
  imports: [
    CommonModule
  ],
  exports: [UserListComponent, UserDetailsComponent, UserFormComponent]
})
export class UserModule { }
