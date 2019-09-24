<<<<<<< HEAD
import {Component} from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentification.service';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
>>>>>>> b648f56355769f8c1a5a2a82d2086c5273d43321

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
=======
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }


>>>>>>> b648f56355769f8c1a5a2a82d2086c5273d43321
}
