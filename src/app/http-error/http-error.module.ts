import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [NotImplementedComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [NotImplementedComponent]
})
export class HttpErrorModule { }
