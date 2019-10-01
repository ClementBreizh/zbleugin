import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {LoginWigdetModule} from '../login-wigdet/login-wigdet.module';


@NgModule({
  declarations: [NavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    LoginWigdetModule,
    MatMenuModule
  ],
  exports: [NavComponent, HeaderComponent, FooterComponent]
})
export class SkeletonModule { }
