import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import {MaterialModule} from '../material';
import { MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [NavComponent]
})
export class SkeletonModule { }
