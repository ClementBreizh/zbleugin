import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CandidateModule} from './candidate/candidate.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AlertComponent } from './http-error/alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './utils/jwt.interceptor';
import { ErrorInterceptor } from './utils/error.interceptor';
import { fakeBackendProvider } from './utils/fake-backend';
import { RegisterComponent } from './register/register.component';
import { MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { SkeletonModule } from './skeleton/skeleton.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotImplementedComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    CandidateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SkeletonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
