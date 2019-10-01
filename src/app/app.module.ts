import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CandidateModule } from './candidate/candidate.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotImplementedComponent } from './http-error/not-implemented/not-implemented.component';
import { LoginComponent } from './login-page/login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AlertComponent } from './http-error/alert/alert.component';
import { JwtInterceptor } from './utils/jwt.interceptor';
import { ErrorInterceptor } from './utils/error.interceptor';
import { fakeBackendProvider } from './utils/fake-backend';
import { RegisterComponent } from './register/register.component';
import { MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { SkeletonModule } from './skeleton/skeleton.module';
import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared/shared.module';
import { AppointmentModule } from './appointment/appointment.module';
import {LoginPageModule} from './login-page/login-page.module';
import {ReactiveFormsModule} from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PersonModule } from './person/person.module';
import { LoginWigdetModule } from './login-wigdet/login-wigdet.module';
// import 'materialize-css';
// import { MaterializeModule } from "angular2-materialize";

// Register FR locale.
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotImplementedComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    CandidateModule,
    UserModule,
    MatFormFieldModule,
    MatInputModule,
    SkeletonModule,
    CompanyModule,
    SharedModule,
    AppointmentModule,
    MatSidenavModule,
    ReactiveFormsModule,
    PersonModule,
    LoginWigdetModule
  ],
  providers: [
    // Set locate (for date pipe for example).
    {provide: LOCALE_ID, useValue: 'fr-FR'},

    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
