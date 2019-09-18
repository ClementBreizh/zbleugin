import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidatesListComponent} from './candidates-list/candidates-list.component';

@NgModule({
  declarations: [CandidatesListComponent],
  imports: [
    CommonModule
  ],
  exports: [CandidatesListComponent]
})
export class CandidateModule { }
