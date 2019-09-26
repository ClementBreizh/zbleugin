import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [NavComponent, HeaderComponent]
})
export class SkeletonModule { }
