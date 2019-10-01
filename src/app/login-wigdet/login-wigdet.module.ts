import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginWigdetComponent} from './login-wigdet/login-wigdet.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [LoginWigdetComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [LoginWigdetComponent]
})
export class LoginWigdetModule { }
