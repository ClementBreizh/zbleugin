import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  declarations: [PersonListComponent],
  imports: [
    CommonModule
  ]
})
export class PersonModule { }
