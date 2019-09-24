import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CandidateModule} from './candidate/candidate.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { SkeletonModule } from './skeleton/skeleton.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotImplementedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    CandidateModule,
    MatFormFieldModule,
    MatInputModule,
    SkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
